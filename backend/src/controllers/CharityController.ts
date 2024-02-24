import { Request, Response } from "express";
import CharityModel from "../models/CharityModel";

class CharityController {
  async getAllCharities(req: Request, res: Response) {
    try {
      const charities = await CharityModel.getAllCharities();
      res.json(charities);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new CharityController();
