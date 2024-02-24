import { Request, Response } from "express";
import SponsorModel from "../models/SponsorModel";

class SponsorController {
  async getAllSponsors(req: Request, res: Response) {
    try {
      const sponsors = await SponsorModel.getAllSponsors();
      res.json(sponsors);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new SponsorController();
