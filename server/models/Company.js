import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: String, // ✅ FIXED (was city)
    domain: String,
    size: String,
  },
  { timestamps: true },
);

const Company = mongoose.model("Company", companySchema);

export default Company;
