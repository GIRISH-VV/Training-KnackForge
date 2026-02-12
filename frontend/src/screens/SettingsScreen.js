import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* HEADER */}
        <View style={styles.headerRow}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color="#111"
            />
          </TouchableOpacity>

          <Text style={styles.header}>
            Settings
          </Text>

        </View>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              G
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>
              Girish
            </Text>

            <Text style={styles.email}>
              girish@gmail.com
            </Text>
          </View>

        </View>

        {/* MENU LIST */}

        {/* EDIT PROFILE */}
        <TouchableOpacity
  style={styles.menuCard}
  onPress={() =>
    navigation.navigate("EditProfile")
  }
>

          <View style={styles.menuLeft}>

            <View
              style={[
                styles.iconCircle,
                { backgroundColor: "#dbeafe" }
              ]}
            >
              <Ionicons
                name="person-outline"
                size={18}
                color="#3b82f6"
              />
            </View>

            <View>
              <Text style={styles.menuTitle}>
                Edit Profile
              </Text>
              <Text style={styles.menuSub}>
                Update your personal information
              </Text>
            </View>

          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#9ca3af"
          />

        </TouchableOpacity>

        {/* REMINDERS */}
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() =>
            navigation.navigate("Reminder")
          }
        >

          <View style={styles.menuLeft}>

            <View
              style={[
                styles.iconCircle,
                { backgroundColor: "#ede9fe" }
              ]}
            >
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#8b5cf6"
              />
            </View>

            <View>
              <Text style={styles.menuTitle}>
                Reminders
              </Text>
              <Text style={styles.menuSub}>
                Manage notification settings
              </Text>
            </View>

          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#9ca3af"
          />

        </TouchableOpacity>

        {/* DAILY GOAL */}
       <TouchableOpacity
  style={styles.menuCard}
  onPress={() =>
    navigation.navigate("DailyGoal")
  }
>

          <View style={styles.menuLeft}>

            <View
              style={[
                styles.iconCircle,
                { backgroundColor: "#ccfbf1" }
              ]}
            >
              <Ionicons
                name="water-outline"
                size={18}
                color="#06b6d4"
              />
            </View>

            <View>
              <Text style={styles.menuTitle}>
                Daily Goal
              </Text>
              <Text style={styles.menuSub}>
                Currently: 2772 ml
              </Text>
            </View>

          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#9ca3af"
          />

        </TouchableOpacity>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutBtn}>

          <Ionicons
            name="log-out-outline"
            size={18}
            color="#ef4444"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>

        </TouchableOpacity>

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
    paddingBottom: 40,
  },

  /* HEADER */

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  header: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    color: "#111827",
  },

  /* PROFILE */

  profileCard: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  name: {
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
  },

  email: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },

  /* MENU */

  menuCard: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  menuTitle: {
    fontWeight: "700",
    color: "#111827",
  },

  menuSub: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  /* LOGOUT */

  logoutBtn: {
    backgroundColor: "#fee2e2",
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  logoutText: {
    color: "#ef4444",
    fontWeight: "700",
    marginLeft: 6,
  },

});