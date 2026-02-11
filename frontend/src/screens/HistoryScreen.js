import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function HistoryScreen() {

const [logs, setLogs] = useState([]);

useEffect(() => {
loadHistory();
}, []);

const loadHistory = async () => {
try {
const data = await AsyncStorage.getItem(
"hydrationData"
);

  if (!data) return;

  const parsed = JSON.parse(data);

  setLogs(parsed.logs || []);

} catch (e) {
  console.log(e);
}


};

const deleteLog = async (index) => {
  try {
    const data = await AsyncStorage.getItem(
      "hydrationData"
    );

    if (!data) return;

    const parsed = JSON.parse(data);

    const updatedLogs = parsed.logs.filter(
      (_, i) => i !== index
    );

    const deletedAmount =
      parsed.logs[index].amount;

    const updatedIntake =
      parsed.intake - deletedAmount;

    const updatedData = {
      ...parsed,
      logs: updatedLogs,
      intake: updatedIntake,
    };

    await AsyncStorage.setItem(
      "hydrationData",
      JSON.stringify(updatedData)
    );

    setLogs(updatedLogs);

  } catch (e) {
    console.log(e);
  }
};

return ( <SafeAreaView style={styles.safe}> <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle={styles.scroll}
   >


    {/* HEADER */}
    <Text style={styles.header}>
      History
    </Text>

    {/* TODAY LABEL */}
    <Text style={styles.date}>
      Today
    </Text>

    {/* EMPTY STATE */}
    {logs.length === 0 && (
      <View style={styles.emptyBox}>
        <Text style={styles.emptyText}>
          No water logged yet 💧
        </Text>
      </View>
    )}

    {/* LOG LIST */}
    {logs.map((item, index) => (
      <View key={index} style={styles.logCard}>

  <View>
    <Text style={styles.amount}>
      {item.amount} ml
    </Text>

    <Text style={styles.time}>
      {item.time}
    </Text>
  </View>

  <Text
    style={styles.delete}
    onPress={() => deleteLog(index)}
  >
    🗑
  </Text>

</View>
    ))}

  </ScrollView>
</SafeAreaView>


);
}

const styles = StyleSheet.create({

safe: {
flex: 1,
backgroundColor: "#e6f0f4",
},

scroll: {
padding: 20,
},

header: {
fontSize: 22,
fontWeight: "700",
marginBottom: 20,
color: "#111827",
},

date: {
fontSize: 14,
fontWeight: "600",
marginBottom: 12,
color: "#6b7280",
},

emptyBox: {
backgroundColor: "#f3f4f6",
padding: 30,
borderRadius: 16,
alignItems: "center",
},

emptyText: {
color: "#9ca3af",
},

logCard: {
backgroundColor: "#f3f4f6",
padding: 16,
borderRadius: 16,
marginBottom: 12,
flexDirection: "row",
justifyContent: "space-between",
},

amount: {
fontWeight: "700",
color: "#111827",
},

time: {
color: "#6b7280",
},
delete: {
  fontSize: 18,
  color: "#ef4444",
},

});
