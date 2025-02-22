import dotenv from "dotenv";
dotenv.config();

export const DB_CONFIG = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
export const PORT = (process.env.PORT as unknown as number) || 5000;
