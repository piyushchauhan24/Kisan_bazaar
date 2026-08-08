import dotenv from "dotenv";
import pool from "./config/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

pool
  .connect()
  .then(() => console.log("✅ PostgreSQL Connected"))
  .catch((err) => console.log(err.message));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});