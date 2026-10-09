const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/database");
connectDatabase();
const taskRoute = require("./routes/taskRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", taskRoute);
app.get("/", (req, res) => {
  res.send("Mridul Hasan is onto something");
});
app.listen(5000, () => {
  console.log("server is running on prayer and hope :)");
});
