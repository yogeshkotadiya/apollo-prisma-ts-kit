import express from "express";
import { server } from "./CreateServer";
require(`dotenv`).config({ path: ".env" });

const app = express();

server.applyMiddleware({
  app,
  cors: {
    origin: process.env.DEV_FRONTEND_URL,
    credentials: true,
  },
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
