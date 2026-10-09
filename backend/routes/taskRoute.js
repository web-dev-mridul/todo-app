const express = require("express");
const taskItems = require("../models/taskItems");
const Router = express.Router();
Router.post("/task", async (req, res) => {
  try {
    const { title, email, status } = req.body;
    const newTaskItems = new taskItems({
      title,
      email,
      status,
    });
    await newTaskItems.save();
    res
      .status(201)
      .json({ message: "Task created successfully", taskItems: newTaskItems });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
module.exports = Router;
