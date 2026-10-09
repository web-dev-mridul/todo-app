const mongoose = require("mongoose");
const { timeStamps } = require("node:console");
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    status: {
      type: String,
      enum:["pending","in progress", "completed"],
      default:"pending"
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("newTaskItems", taskSchema);
