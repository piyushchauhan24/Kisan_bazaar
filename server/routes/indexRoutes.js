import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Kisan Bazaar API"
  });
});

export default router;