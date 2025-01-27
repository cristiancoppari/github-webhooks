import { GitHubStar, GitHubIssue } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStar): string {
    let message = "";

    const { action, sender, repository } = payload;

    return (message = `User ${sender.login} ${action} star on ${repository.full_name}.`);
  }

  onIssue(payload: GitHubIssue): string {
    const { action, sender, repository, issue } = payload;

    if (action === "opened") {
      const message = `User ${sender.login} opened an issue on ${repository.full_name} with this title ${issue.title}.`;
      return message;
    }

    if (action === "closed") {
      const message = `User ${sender.login} closed an issue on ${repository.full_name} with this title ${issue.title}.`;
      return message;
    }

    if (action === "reopened") {
      const message = `User ${sender.login} reopened an issue on ${repository.full_name} with this title ${issue.title}.`;
      return message;
    }

    return `Unknown action: ${action}`;
  }
}
