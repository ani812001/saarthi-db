import express from "express";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import Company from "../models/Company.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 🔥 Clean function
const cleanText = (text) => text?.trim().toLowerCase();

router.post("/", upload.single("file"), async (req, res) => {
  const results = [];

  try {
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        const item = {
          name: cleanText(data.name),
          location: cleanText(data.location),
          domain: cleanText(data.domain || data[" domain"]),
        };

        if (!item.name || !item.location) return;

        results.push(item);
      })
      .on("end", async () => {
        let inserted = 0;

        for (let item of results) {
          const exists = await Company.findOne({
            name: new RegExp(`^${item.name}$`, "i"),
            location: new RegExp(`^${item.location}$`, "i"),
          });

          if (!exists) {
            await Company.create(item);
            inserted++;
          }
        }

        fs.unlinkSync(req.file.path);

        res.json({
          message: "CSV processed",
          total: results.length,
          inserted,
        });
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
