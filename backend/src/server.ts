import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { return_hello } from "./util";

import pool from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_PORT || 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/hi", (_req: Request, res: Response) => {
  res.send("TEST " + return_hello());
});

app.get("/team", async (req: Request, res: Response) => {
  // Here I am using postgres - but I am not using it from my local
  // system - I am using it from a docker container :)
  const result = await pool.query("SELECT $1::text as name", [
    "SOFTWARESLOTHS",
  ]);
  const name = result.rows[0].name;
  res.send(`Our team is ${name}!`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
