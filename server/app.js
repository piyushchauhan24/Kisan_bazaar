import express from "express";
import authRoutes from "./routes/authRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api/auth", authRoutes);

export default app;