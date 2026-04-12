import express from "express";
import Company from "../models/Company.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Company.aggregate([
    {
      $group: {
        _id: "$domain",
        value: { $sum: 1 },
      },
    },
  ]);

  const formatted = data.map((item) => ({
    name: item._id,
    value: item.value,
  }));

  res.json(formatted);
});

export default router;
