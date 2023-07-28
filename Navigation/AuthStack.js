import React from "react";
import SignUp from "../screens/SignUp"
import Login from "../screens/Login"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>

   
  );
}