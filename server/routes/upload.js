import express from "express";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import Company from "../models/Company.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  const results = [];

  try {
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        // 🔥 Clean keys
        const cleanedData = {};

        Object.keys(data).forEach((key) => {
          cleanedData[key.trim()] = data[key];
        });

        console.log("CLEANED ROW:", cleanedData);

        results.push({
          name: cleanedData.name,
          location: cleanedData.location,
          domain: cleanedData.domain,
        });
      })
      .on("end", async () => {
        await Company.insertMany(results);

        fs.unlinkSync(req.file.path);

        res.json({
          message: "CSV uploaded successfully",
          count: results.length,
        });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
