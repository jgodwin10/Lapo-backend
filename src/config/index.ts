import dotenv from "dotenv";
dotenv.config();

export const DB_CONFIG = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
export const PORT = (process.env.PORT as unknown as number) || 5000;

// https://x.com/i/oauth2/authorize?response_type=code&client_id=Q3ZnbVY1dHFQaDRlTm5ka19Gbmg6MTpjaQ&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fv1%2Fclientaccount%2Fcallback%2Ftwitter&state=wA_nWj8gCIBoldVzHzZZqw9xQp7I9bkI&code_challenge=tslQeDKmSkSsiF3igfNOLWBNR96VflGV2FE9Mqh9KDo&code_challenge_method=s256&scope=tweet.read%20tweet.write%20list.read%20list.write%20users.read%20offline.access
