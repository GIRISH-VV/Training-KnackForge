import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import AuthScreen from "../screens/AuthScreen";
import DashboardScreen from "../screens/DashboardScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import BottomTabs from "./BottomTabs";
import ReminderScreen from "../screens/ReminderScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import DailyGoalScreen from "../screens/DailyGoalScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen
         name="Onboarding"
        component={OnboardingScreen}
        />
        <Stack.Screen
          name="Dashboard"
          component={BottomTabs}
        />
        <Stack.Screen
        name="Reminders"
        component={ReminderScreen}
        options={{ headerShown: false }}  
        />
        <Stack.Screen
        name="EditProfile"
         component={EditProfileScreen}
        />
        <Stack.Screen
         name="DailyGoal"
         component={DailyGoalScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}