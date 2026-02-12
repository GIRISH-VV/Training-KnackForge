<<<<<<< HEAD
import { View, Text } from "react-native";

export default function AnalyticsScreen() {
  return (
    <View>
      <Text>Analytics Screen</Text>
    </View>
  );
}
=======
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;

export default function AnalyticsScreen() {

const [activeTab, setActiveTab] = useState("weekly");

const [weeklyIntake, setWeeklyIntake] = useState([0,0,0,0,0,0,0]);
const [streak, setStreak] = useState(0);
const [goalCompletion, setGoalCompletion] = useState(0);
const [avgIntake, setAvgIntake] = useState(0);

const goal = 2772;

useEffect(() => {
loadAnalytics();
}, []);

const loadAnalytics = async () => {
try {
const data = await AsyncStorage.getItem("hydrationData");
if (!data) return;


  const parsed = JSON.parse(data);

  const todayIntake = parsed.intake || 0;
  const streakValue = parsed.streak || 0;

  const tempWeekly = [0,0,0,0,0,0,todayIntake];
  setWeeklyIntake(tempWeekly);

  setStreak(streakValue);

  const goalPercent = Math.min(
    Math.round((todayIntake / goal) * 100),
    100
  );
  setGoalCompletion(goalPercent);

  setAvgIntake(todayIntake);

} catch (e) {
  console.log(e);
}

};

const weeklyData = {
labels: ["Wed","Thu","Fri","Sat","Sun","Mon","Tue"],
datasets: [{ data: weeklyIntake }],
};

const monthlyData = {
labels: ["1","5","10","15","20","25","30"],
datasets: [{ data: [0,0,0,0,0,0,0] }],
};

const trendData = {
labels: ["Wed","Thu","Fri","Sat","Sun","Mon","Tue"],
datasets: [
{
data: weeklyIntake,
strokeWidth: 3,
},
],
};

return (
   <SafeAreaView style={styles.safe}>
     <ScrollView showsVerticalScrollIndicator={false}>


    {/* HEADER */}
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={22} color="#111" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        Analytics
      </Text>
    </View>

    {/* TOGGLE */}
    <View style={styles.toggleRow}>

      <TouchableOpacity
        style={[
          styles.toggleBtn,
          activeTab === "weekly" && styles.activeToggle
        ]}
        onPress={() => setActiveTab("weekly")}
      >
        <Text style={[
          styles.toggleText,
          activeTab === "weekly" && styles.activeText
        ]}>
          Weekly
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.toggleBtn,
          activeTab === "monthly" && styles.activeToggle
        ]}
        onPress={() => setActiveTab("monthly")}
      >
        <Text style={[
          styles.toggleText,
          activeTab === "monthly" && styles.activeText
        ]}>
          Monthly
        </Text>
      </TouchableOpacity>

    </View>

    {/* STATS GRID */}
    <View style={styles.grid}>

      <View style={styles.card}>
        <Text style={styles.cardValue}>
          {avgIntake}
        </Text>
        <Text style={styles.cardLabel}>
          Avg Daily Intake (ml)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>
          {goalCompletion}%
        </Text>
        <Text style={styles.cardLabel}>
          Goal Completion
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>
          {streak}
        </Text>
        <Text style={styles.cardLabel}>
          Day Streak
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>
          {goalCompletion > 0 ? 1 : 0}
        </Text>
        <Text style={styles.cardLabel}>
          Days Met Goal
        </Text>
      </View>

    </View>

    {/* BAR CHART */}
    <View style={styles.chartCard}>

      <Text style={styles.chartTitle}>
        {activeTab === "weekly"
          ? "Last 7 Days"
          : "Last 30 Days"}
      </Text>

      <BarChart
        data={
          activeTab === "weekly"
            ? weeklyData
            : monthlyData
        }
        width={screenWidth - 80}
        height={180}
        yAxisSuffix="ml"
        chartConfig={{
          backgroundGradientFrom: "#f3f4f6",
          backgroundGradientTo: "#f3f4f6",
          decimalPlaces: 0,
          color: (opacity = 1) =>
            `rgba(59,130,246, ${opacity})`,
          labelColor: () => "#6b7280",
        }}
        style={{
          marginTop: 10,
          borderRadius: 16,
        }}
      />

    </View>

    {/* TREND CHART */}
    <View style={styles.chartCard}>

      <Text style={styles.chartTitle}>
        Hydration Trend
      </Text>

      <LineChart
        data={trendData}
        width={screenWidth - 80}
        height={180}
        yAxisSuffix="ml"
        chartConfig={{
          backgroundGradientFrom: "#f3f4f6",
          backgroundGradientTo: "#f3f4f6",
          decimalPlaces: 0,
          color: (opacity = 1) =>
            `rgba(59,130,246, ${opacity})`,
          labelColor: () => "#6b7280",
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#3b82f6",
          },
        }}
        bezier
        style={{
          marginTop: 10,
          borderRadius: 16,
        }}
      />

    </View>

    {/* INSIGHTS */}
    <View style={styles.insightBox}>
      <Text style={styles.insightTitle}>
        Insights
      </Text>

      <Text style={styles.insightText}>
        📉 You can do better! Set reminders to stay on track.
      </Text>

      <Text style={styles.insightText}>
        💧 Aim to drink more water daily.
      </Text>
    </View>

  </ScrollView>
</SafeAreaView>


);
}

const styles = StyleSheet.create({
safe: {
flex: 1,
backgroundColor: "#e6f0f4",
},

header: {
flexDirection: "row",
alignItems: "center",
padding: 20,
},

headerTitle: {
fontSize: 18,
fontWeight: "700",
marginLeft: 10,
},

toggleRow: {
flexDirection: "row",
marginHorizontal: 20,
backgroundColor: "#e5e7eb",
borderRadius: 12,
padding: 4,
},

toggleBtn: {
flex: 1,
padding: 10,
borderRadius: 10,
alignItems: "center",
},

activeToggle: {
backgroundColor: "#3b82f6",
},

toggleText: {
color: "#374151",
fontWeight: "600",
},

activeText: {
color: "#fff",
},

grid: {
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between",
margin: 20,
},

card: {
width: "48%",
backgroundColor: "#f3f4f6",
padding: 18,
borderRadius: 16,
marginBottom: 14,
},

cardValue: {
fontSize: 18,
fontWeight: "700",
},

cardLabel: {
fontSize: 12,
color: "#6b7280",
marginTop: 4,
},

chartCard: {
backgroundColor: "#f3f4f6",
marginHorizontal: 20,
marginTop: 10,
padding: 20,
borderRadius: 18,
height: 220,
},

chartTitle: {
fontWeight: "700",
},

insightBox: {
margin: 20,
padding: 20,
borderRadius: 18,
backgroundColor: "#3b82f6",
},

insightTitle: {
color: "#fff",
fontWeight: "700",
marginBottom: 10,
},

insightText: {
color: "#e0f2fe",
fontSize: 13,
marginBottom: 6,
},
});
>>>>>>> 06ab4cd (Analytics Updated)
