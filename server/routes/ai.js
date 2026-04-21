import express from "express";
import OpenAI from "openai";
import Company from "../models/Company.js";
import axios from "axios";

const router = express.Router();

router.post("/search", async (req, res) => {
  try {
    // ✅ Check API key first (prevents crash)
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY missing in .env",
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // 🤖 AI CALL
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Return ONLY JSON like { name, location, domain }. No explanation.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    let filter = {};

    // ✅ Safe JSON parsing
    try {
      filter = JSON.parse(aiResponse.choices[0].message.content);
    } catch (e) {
      return res.status(400).json({
        error: "AI response parsing failed",
        raw: aiResponse.choices[0].message.content,
      });
    }

    // 🔍 DB SEARCH
    let results = await Company.find(filter);

    // 🌐 FALLBACK → Google Places API
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

      // 💾 SAVE TO DB (avoid duplicates)
      for (let item of results) {
        const exists = await Company.findOne({
          name: new RegExp(`^${item.name}$`, "i"),
        });

        if (!exists) {
          await Company.create(item);
        }
      }
    }

    res.json(results);
  } catch (err) {
    console.error("AI SEARCH ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
