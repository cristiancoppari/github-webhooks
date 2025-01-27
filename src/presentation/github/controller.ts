import { Request, Response } from "express";

import { GitHubService } from "../services/github.service";
import { DiscordService } from "../services/discord.service";

export class GithubController {
  constructor(
    private readonly githubService: GitHubService,
    private readonly discordService: DiscordService
  ) {}

  webhookHandler = (req: Request, res: Response) => {
    const payload = req.body;
    const githubEventHeader = req.header("x-github-event") || "unknown";
    let message: string = "";

    switch (githubEventHeader) {
      case "star":
        message = this.githubService.onStar(payload);
        break;
      case "issues":
        message = this.githubService.onIssue(payload);
        break;
      default:
        console.log("Unknown event");
        break;
    }

    this.discordService.notify(message).then((response) => {
      if (response) {
        res.status(202).json("Accepted");
      } else {
        res.status(500).json("Internal server error");
      }
    });
  };
}
