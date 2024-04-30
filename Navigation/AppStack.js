import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";

function Tab() {
 
    return (
      <BottomTab/>
    );
  }
export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={Tab}/>
          <Stack.Screen name="EditProfile" component={EditProfile}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword}/>

        </Stack.Navigator>
        
  );
}