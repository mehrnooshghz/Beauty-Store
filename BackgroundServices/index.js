import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js";
import sendDeliveredOrderEmail from "./EmailServices/sendDeliveredOrderEmail.js";
import sendPromotionEmail from "./EmailServices/sendPromotionemail.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT;

// SCHEDULE SERVICES
const services = () => {
  // Run every 10 seconds to check for new timetable requests
  cron.schedule("*/10 * * * * *", () => {
    sendWelcomeEmail();
    sendPendingOrderEmail();
    sendDeliveredOrderEmail();
    
     // Add timetable email service
  });
};

const promotion = () => {
  cron.schedule("30 5 * * 5", () => {
    sendPromotionEmail();
  });
};

services();
promotion();

app.listen(PORT, () => {
  console.log(`Background services is running on port ${PORT}`);
  dbConnection();
});