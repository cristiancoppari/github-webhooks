import { Request, Response } from "express";

import { GitHubService } from "../services/github.service";

export class GithubController {
  constructor(private readonly githubService: GitHubService) {}

  webhookHandler = (req: Request, res: Response) => {
    const payload = req.body;
    const githubEventHeader = req.header("x-github-event") || "unknown";
    const githubSignatureHeader =
      req.header("x-hub-signature-256") || "unknown";
    let message: string = "";

    switch (githubEventHeader) {
      case "star":
        message = this.githubService.onStar(payload);
        break;
      case "issue":
        message = this.githubService.onIssue(payload);
        break;
      default:
        console.log("Unknown event");
        break;
    }

    console.log(message);

    res.status(202).json("Accepted");
  };
}
