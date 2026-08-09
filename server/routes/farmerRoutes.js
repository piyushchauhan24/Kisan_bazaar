import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  authorize("farmer"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Farmer",
      user: req.user,
    });
  }
);

export default router;