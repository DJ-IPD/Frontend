import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
import AddPayment from "../screens/AddPayment";
import AboutUs from "../screens/AboutUs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import FindPage from "../screens/FindWorker";
import AcceptWorkerScreen from "../screens/AcceptWorker";

function Tab() {

  return (
    <BottomTab />
  );
}
export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="FindPage" component={FindPage} />
      <Stack.Screen name="AcceptWorkerScreen" component={AcceptWorkerScreen} />

    </Stack.Navigator>

  );
}