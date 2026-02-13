import cron from "node-cron";
import Reminder from "../models/reminder.js";
import WaterLog from "../models/waterLog.js";
import { sendPushNotification } from "../services/notificationService.js";

const isWithinTimeRange = (start, end) => {
  const now = new Date();

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const startTime = new Date();
  startTime.setHours(sh, sm, 0, 0);

  const endTime = new Date();
  endTime.setHours(eh, em, 0, 0);

  return now >= startTime && now <= endTime;
};

cron.schedule(
  "*/1 * * * *",
  async () => {
    try {
      const reminders = await Reminder.find({
        isActive: true,
        isPaused: false,
        sleepMode: false,
      });

      for (const reminder of reminders) {
        if (!reminder.fcmToken) continue;

        if (!isWithinTimeRange(reminder.startTime, reminder.endTime))
          continue;

        const now = new Date();

        if (
          reminder.lastNotifiedAt &&
          (now - reminder.lastNotifiedAt) / 60000 < reminder.interval
        )
          continue;

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const logs = await WaterLog.find({
          userId: reminder.userId,
          createdAt: { $gte: startOfDay },
        });

        const totalIntake = logs.reduce(
          (sum, log) => sum + log.amount,
          0
        );

        let message = "Time to drink water 💧";

        // 🚰 Smart Logic 1: Behind hydration goal
        if (totalIntake < 500) {
          message = "You're behind your hydration goal 🚰 Drink now!";
        }

        // 🏃 Smart Logic 2: High activity users get stronger reminder
        if (reminder.activityLevel === "High") {
          message = "High activity detected 🔥 Stay hydrated now!";
        }

        await sendPushNotification(
          reminder.fcmToken,
          "Hydration Reminder",
          message
        );

        reminder.lastNotifiedAt = now;
        await reminder.save();
      }
    } catch (error) {
      console.error("Reminder Cron Error:", error.message);
    }
  },
  {
    timezone: "Asia/Kolkata",
  }
);

console.log("Reminder Cron Job Started");
