import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { return_hello } from "./util";

import pool from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_PORT || 3030;

app.use(cors()); // This enables CORS for all routes

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/charities", async (req: Request, res: Response) => {
  try {
    // Query the database for all charities
    const { rows } = await pool.query("SELECT * FROM charities");
    // Send the results back as JSON
    res.json(rows);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).send("Internal Server Error: " + error);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
