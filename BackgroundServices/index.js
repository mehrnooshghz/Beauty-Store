import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// SCHEDULE SERVICES
const services = () => {
  // Run every 10 seconds to check for new timetable requests
  cron.schedule("* * * * * *", () => {});

};

app.listen(PORT, () => {
  console.log(`Background services is running on port ${PORT}`);
  dbConnection();
})