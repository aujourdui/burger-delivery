import express from "express";
import { getBurgers } from "../controllers/burgers";
const router = express.Router();

router.get("/", getBurgers);

export default router;
