import express from "express";
import Company from "../models/Company.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Company.aggregate([
    {
      $group: {
        _id: "$location",
        companies: { $sum: 1 },
      },
    },
  ]);

  const formatted = data.map((item) => ({
    name: item._id,
    companies: item.companies,
  }));

  res.json(formatted);
});

export default router;
