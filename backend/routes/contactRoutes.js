import express from "express";
import { handleContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", handleContactForm);
router.get("/", (req, res) => {
  res.send("Backend is Live!");
});
export default router;
