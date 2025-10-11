import express from "express";
import { handleContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", handleContactForm);
router.get("/",<div>Backend is live.</div>)

export default router;
