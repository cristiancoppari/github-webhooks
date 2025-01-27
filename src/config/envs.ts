import dotenv from "dotenv";
import { get } from "env-var";

dotenv.config();

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
};
