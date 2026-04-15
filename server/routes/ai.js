import express from "express";
import OpenAI from "openai";
import Company from "../models/Company.js";
import axios from "axios";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/search", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Return ONLY JSON with fields: name, location, domain. No explanation.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    let filter = {};

    try {
      filter = JSON.parse(aiResponse.choices[0].message.content);
    } catch (e) {
      return res.status(400).json({ error: "AI parsing failed" });
    }

    let results = await Company.find(filter);

    // 🔥 If not found → Google API
    if (results.length === 0) {
      const googleRes = await axios.get(
        "https://maps.googleapis.com/maps/api/place/textsearch/json",
        {
          params: {
            query: prompt,
            key: process.env.GOOGLE_API_KEY,
          },
        },
      );

      results = googleRes.data.results.map((place) => ({
        name: place.name,
        location: place.formatted_address,
        domain: "Unknown",
      }));

      // 🔥 Save to DB (Data Enrichment)
      for (let item of results) {
        const exists = await Company.findOne({ name: item.name });

        if (!exists) {
          await Company.create(item);
        }
      }
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
