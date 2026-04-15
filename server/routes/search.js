import express from "express";
import Company from "../models/Company.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { name, location, domain } = req.query;

    let filter = {};

    if (name) filter.name = new RegExp(name, "i");
    if (location) filter.location = new RegExp(location, "i");
    if (domain) filter.domain = new RegExp(domain, "i");

    const results = await Company.find(filter);

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router; // ✅ VERY IMPORTANT
