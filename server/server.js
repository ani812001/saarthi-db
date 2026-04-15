import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import aiRoutes from "./routes/ai.js";
import searchRoutes from "./routes/search.js";
import uploadRoutes from "./routes/upload.js";
import statsRoutes from "./routes/stats.js"; // ✅ NEW
import domainRoutes from "./routes/domainStats.js"; // ✅ NEW

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/stats", statsRoutes); // ✅ NEW
app.use("/api/domain-stats", domainRoutes); // ✅ NEW

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
