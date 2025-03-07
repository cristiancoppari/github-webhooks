import dotenv from "dotenv";
import { get } from "env-var";

dotenv.config();

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  DISCORD_WEBHOOK_URL: get("DISCORD_WEBHOOK_URL").required().asString(),
  SECRET_TOKEN: get("SECRET_TOKEN").required().asString(),
};
