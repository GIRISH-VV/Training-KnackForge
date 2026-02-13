import Reminder from "../models/reminder.js";

export const getReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findOne({ userId: req.user.id });

    if (!reminder) {
      return res.status(404).json({ message: "Reminder not found" });
    }

    res.status(200).json(reminder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrUpdateReminder = async (req, res) => {
  try {
    const { interval, startTime, endTime, fcmToken, activityLevel } = req.body;

    let reminder = await Reminder.findOne({ userId: req.user.id });

    if (reminder) {
      reminder.interval = interval;
      reminder.startTime = startTime;
      reminder.endTime = endTime;
      reminder.fcmToken = fcmToken;
      reminder.activityLevel = activityLevel;
      reminder.isActive = true;

      await reminder.save();
    } else {
      reminder = await Reminder.create({
        userId: req.user.id,
        interval,
        startTime,
        endTime,
        fcmToken,
        activityLevel,
      });
    }

    res.json(reminder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const pauseReminder = async (req, res) => {
//   try {
//     const reminder = await Reminder.findOne({ userId: req.user.id });

//     reminder.isPaused = true;
//     await reminder.save();

//     res.json({ message: "Reminder paused" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const resumeReminder = async (req, res) => {
//   try {
//     const reminder = await Reminder.findOne({ userId: req.user.id });

//     reminder.isPaused = false;
//     await reminder.save();

//     res.json({ message: "Reminder resumed" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const toggleSleepMode = async (req, res) => {
  try {
    const reminder = await Reminder.findOne({ userId: req.user.id });

    reminder.sleepMode = !reminder.sleepMode;
    await reminder.save();

    res.json({ message: "Sleep mode updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
