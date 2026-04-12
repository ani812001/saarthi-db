import express from "express";
import OpenAI from "openai";
import Company from "../models/Company.js";

const router = express.Router();

router.post("/search", async (req, res) => {
  try {
    console.log("AI ROUTE KEY:", process.env.OPENAI_API_KEY);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt } = req.body;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Convert user query into JSON filter: city, domain",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const filter = JSON.parse(aiResponse.choices[0].message.content);

    const results = await Company.find(filter);

    res.json(results);
  } catch (error) {
    console.error("AI ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
