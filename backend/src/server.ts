import express, { Express, Request, Response } from "express";
import sponsorRoutes from "./routes/sponsorRoutes";
import charityRoutes from "./routes/charityRoutes";

import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";

dotenv.config();

const app: Express = express();

// built in middleware that parses incoming
// json in request into req.body
app.use(express.json());

// Only allow our frontend vite dev server to access
// this server (will have to change when deployed)
const whitelist = ["http://localhost:5217"];

// CORS options
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // If the origin of the request is in our whitelist,
    // then we let it pass
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/sponsors", sponsorRoutes);
app.use("/charities", charityRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const PORT = process.env.EXPRESS_PORT || 3030;
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
