import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

// routes/protected.js
router.get("/dashboard", auth, (req, res) => {
  res.json({
    message: `Welcome, user with ID ${req.user.id}`
  });
});

export default router;
