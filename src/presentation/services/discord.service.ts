import { envs } from "../../config/envs";

export class DiscordService {
  constructor() {}

  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

  async notify(message: string) {
    const body = {
      content: message,
    };

    try {
      const response = await fetch(this.discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
