import dbConnection from "./utils/db.js";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";

(async () => {
  // اتصال MongoDB
  await dbConnection();

  // تست ارسال ایمیل
  await sendWelcomeEmail();

  console.log("✅ sendWelcomeEmail finished.");
})();
