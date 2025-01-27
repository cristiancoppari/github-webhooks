import { GitHubStar, GitHubIssue } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStar): string {
    let message = "";

    const { action, sender, repository } = payload;

    return (message = `User ${sender.login} ${action} star on ${repository.full_name}.`);
  }

  onIssue(payload: GitHubIssue): string {
    console.log(payload);
    return "";
  }
}
