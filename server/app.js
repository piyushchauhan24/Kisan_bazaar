import express from "express";
import authRoutes from "./routes/authRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";

import farmerRoutes from "./routes/farmerRoutes.js";
import buyerRoutes from "./routes/buyerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/farmer", farmerRoutes);
app.use("/api/buyer", buyerRoutes);
app.use("/api/admin", adminRoutes);

export default app;