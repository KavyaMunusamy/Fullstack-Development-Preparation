import express from "express";
import { login, register, bookTicket } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/book-ticket", bookTicket);

export default router;