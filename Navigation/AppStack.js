import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
        </Stack.Navigator>
        
  );
}