import WaterLog from "../models/waterLog.js";

// Helper to get date range for analytics
const getDateRange = (type) => {
  const now = new Date();
  let start, end;

  switch (type) {
    case "week":
      const day = now.getDay(); 
      start = new Date(now);
      start.setDate(now.getDate() - day);
      start.setHours(0, 0, 0, 0);

      end = new Date(start);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
      break;

    case "month":
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      end.setHours(23, 59, 59, 999);
      break;

    default:
      start = new Date(now);
      start.setHours(0, 0, 0, 0);
      end = new Date(now);
      end.setHours(23, 59, 59, 999);
  }

  return { start, end };
};

// Weekly analytics
export const getWeeklyAnalytics = async (req, res) => {
  try {
    const { start, end } = getDateRange("week");

    const logs = await WaterLog.find({
      userId: req.user.id,
      date: { $gte: start, $lte: end },
    });

    const dailyTotals = Array(7).fill(0);

    logs.forEach((log) => {
      const dayIndex = log.date.getDay();
      dailyTotals[dayIndex] += log.amount;
    });

    const totalIntake = dailyTotals.reduce((sum, val) => sum + val, 0);
    const dailyPercent = dailyTotals.map((amt) => Math.min((amt / 2000) * 100, 100));

    res.json({ dailyTotals, dailyPercent, totalIntake });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Monthly analytics
export const getMonthlyAnalytics = async (req, res) => {
  try {
    const { start, end } = getDateRange("month");

    const logs = await WaterLog.find({
      userId: req.user.id,
      date: { $gte: start, $lte: end },
    });

    const daysInMonth = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
    const dailyTotals = Array(daysInMonth).fill(0);

    logs.forEach((log) => {
      const dayIndex = log.date.getDate() - 1;
      dailyTotals[dayIndex] += log.amount;
    });

    const totalIntake = dailyTotals.reduce((sum, val) => sum + val, 0);

    res.json({ dailyTotals, totalIntake });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Streak analytics
export const getStreakAnalytics = async (req, res) => {
  try {
    const today = new Date();
    let streak = 0;

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);
    startDate.setHours(0, 0, 0, 0);

    const logs = await WaterLog.find({
      userId: req.user.id,
      date: { $gte: startDate, $lte: today },
    });

    const goal = 2000;
    const daysMetGoal = {}; // corrected: object instead of Set

    logs.forEach((log) => {
      const day = log.date.toDateString();
      if (!daysMetGoal[day]) daysMetGoal[day] = 0;
      daysMetGoal[day] += log.amount;
    });

    let current = new Date(today);
    while (true) {
      const day = current.toDateString();
      if (daysMetGoal[day] >= goal) {
        streak++;
        current.setDate(current.getDate() - 1);
      } else {
        break;
      }
    }

    res.json({ streak });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Weekly performance percentage
export const getPerformance = async (req, res) => {
  try {
    const { start, end } = getDateRange("week");

    const logs = await WaterLog.find({
      userId: req.user.id,
      date: { $gte: start, $lte: end },
    });

    const totalIntake = logs.reduce((sum, log) => sum + log.amount, 0);
    const daysCounted = 7;
    const goalPerDay = 2000;
    const maxGoal = goalPerDay * daysCounted;

    const performancePercent = Math.min((totalIntake / maxGoal) * 100, 100);

    res.json({ performancePercent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};