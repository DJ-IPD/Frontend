import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";
import Home from "../screens/Home";
import Bookings from "../screens/Bookings";
import Setting from "../screens/Setting";
import Profile from "../screens/Profile";
import Hometab from "../assets/Home-tab.png";
export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          elevation: 0,
          right: 20,
          backgroundColor: "#E9E9E9",
          height: 90,
          borderRadius: 15,
        },
        headerShown: false,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: focused ? "#31A23F" : "#E9E9E9",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={Hometab}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "#000000",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Bookings" component={Bookings} options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                backgroundColor: focused ? "#31A23F" : "#E9E9E9",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/Bookings-tab.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#000000",
                }}
              />
            </View>
          );
        },
      }}></Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: focused ? "#31A23F" : "#E9E9E9",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/Setting-tab.png")}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "#000000",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: focused ? "#31A23F" : "#E9E9E9",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/Profile-tab.png")}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "#000000",
                  }}
                />
              </View>
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  Tab: {
    position: "absolute",
    bottom: 25,
    left: 20,
    elevation: 0,
    right: 20,
    backgroundColor: "#F0F0F3",
    height: 90,
    borderRadius: 15,
  },
});
