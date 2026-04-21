import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import aiRoutes from "./routes/ai.js";
import searchRoutes from "./routes/search.js";
import uploadRoutes from "./routes/upload.js";
import statsRoutes from "./routes/stats.js";
import domainRoutes from "./routes/domainStats.js";

connectDB();

const app = express();

// ✅ VERY IMPORTANT
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/domain-stats", domainRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
