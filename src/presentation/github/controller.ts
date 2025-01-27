import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webhookHandler(req: Request, res: Response) {
    const payload = req.body;
    const githubEventHeader = req.header("x-github-event") || "unknown";
    const githubSignatureHeader =
      req.header("x-hub-signature-256") || "unknown";

    res.status(202).json("Accepted");
  }
}
