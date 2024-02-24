import { Router } from "express";
import CharityController from "../controllers/CharityController";

const router = Router();

router.get("/", CharityController.getAllCharities);

export default router;
