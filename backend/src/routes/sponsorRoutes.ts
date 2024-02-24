import { Router } from "express";
import SponsorController from "../controllers/SponsorController";

const router = Router();

router.get("/", SponsorController.getAllSponsors);

export default router;
