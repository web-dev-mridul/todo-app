const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const task = [
  {
    id: 1,
    title: "task one",
    description: "new task",
    date: "08-10-2026",
    status: "false",
  },
  {
    id: 2,
    title: "task two",
    description: "new task",
    date: "08-10-2026",
    status: "false",
  },
  {
    id: 3,
    title: "task three",
    description: "new task 3",
    date: "08-10-2026",
    status: "false",
  },
  {
    id: 4,
    title: "task four",
    description: "new task 4",
    date: "08-10-2026",
    status: "false",
  },
];

app.get("/tasks", (req, res) => {
  res.json(task);
});
app.get("/", (req, res) => {
  res.send("Mridul Hasan is onto something");
});

app.listen(5000, () => {
  console.log("server is running on prayer and hope :)");
});