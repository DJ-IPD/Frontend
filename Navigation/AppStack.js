import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";

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
        </Stack.Navigator>
        
  );
}