import dotenv from "dotenv";
dotenv.config(); // ✅ MUST BE FIRST

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import aiRoutes from "./routes/ai.js";
import statsRoutes from "./routes/stats.js";
import domainStatsRoutes from "./routes/domainStats.js";
import uploadRoutes from "./routes/upload.js";

// DEBUG
console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

connectDB();

const app = express();

app.use("/api/upload", uploadRoutes);

app.use("/api/stats", statsRoutes);
app.use("/api/domain-stats", domainStatsRoutes);

app.use(express.json());
app.use(cors());

app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
