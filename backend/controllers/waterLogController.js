import WaterLog from "../models/waterLog.js";

const getTodayRange = () => {
  const now = new Date();

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

export const createWaterLog = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid water amount" });
    }

    const waterLog = await WaterLog.create({
      userId: req.user.id,
      amount,
      date: new Date(),
    });

    res.status(201).json(waterLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWaterLog = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid water amount" });
    }

    const waterLog = await WaterLog.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { amount },
      { new: true }
    );

    if (!waterLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json(waterLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWaterLog = async (req, res) => {
  try {
    const { id } = req.params;

    const waterLog = await WaterLog.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!waterLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.json({ message: "Log deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDailySummary = async (req, res) => {
  try {
    const { start, end } = getTodayRange();
    const logs = await WaterLog.find({
      userId: req.user.id,
      date: { $gte: start, $lte: end },
    }).sort({ date: -1 });

    const totalIntake = logs.reduce((sum, log) => sum + log.amount, 0);

    const dailyGoal = 3000; 
    const progress = Math.min((totalIntake / dailyGoal) * 100, 100);

    res.status(200).json({ success: true, totalIntake, progress, remaining: Math.max(dailyGoal - totalIntake, 0), logs,date: start});

  } catch (error) {
    res.status(500).json({ success: false, message: error.message});
  }
};


