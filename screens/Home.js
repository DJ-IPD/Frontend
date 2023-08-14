import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SvgUri, SvgXml } from "react-native-svg";
import {LinearGradient} from 'expo-linear-gradient';

export default function Home() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0C9.82233 0 5.625 4.19733 5.625 9.375V14.901C5.625 14.9936 5.59761 15.0841 5.54627 15.1611L2.3529 19.9511C2.04128 20.4185 1.875 20.9677 1.875 21.5295C1.875 23.101 3.14897 24.375 4.72048 24.375H25.2795C26.851 24.375 28.125 23.101 28.125 21.5295C28.125 20.9677 27.9587 20.4185 27.6471 19.9511L24.4537 15.1611C24.4024 15.0841 24.375 14.9936 24.375 14.901V9.375C24.375 4.19733 20.1777 0 15 0Z" fill="#F23535"/>
<path d="M18.7211 26.7178C18.4908 28.5681 16.9126 30 15 30C13.0874 30 11.5092 28.5681 11.2789 26.7178C11.2469 26.4609 11.4599 26.25 11.7188 26.25H18.2812C18.5401 26.25 18.7531 26.4609 18.7211 26.7178Z" fill="#F23535"/>
</svg>
`;
  return (
    <View>
      <View
        style={{ flexDirection: "row-reverse", right: 15, marginTop: "3%" }}
      >
        <SvgXml width="30" height="30" xml={xml} />
      </View>
      <View>
        <Text style={styles.mainText}>You're Welcome</Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            marginHorizontal: 15,
          }}
        >
          <Image source={require("../assets/map_marker.png")} />
          <Text style={{ marginTop: 5, color: "#A9A1A1" }}>
            {" "}
            Mumbai, Maharashtra
          </Text>
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={{ flexDirection: "row", marginHorizontal: 8 }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            >
              <LinearGradient style={{borderRadius:20}} colors={['#30CAC1','#C5FE7E','#F7FB57']}>
              <Image
                source={require("../assets/notes.png")}
                style={{ margin: 6 }}
              />
              </LinearGradient>
            </View>
            <Text style={styles.btnText}>Find Labourers</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#F0F0F3",
                width: 40,
                height: 40,
                borderRadius: 20,
                left:70
              }}
            >
              <Image
                style={{ margin: 6 }}
                source={require("../assets/plus.png")}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainText: {
    fontSize: 35,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#21212F",
    padding: 10,
    height: 66,
    marginHorizontal: 20,
    borderRadius: 32,
    marginTop: "3%",
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: "2.3%",
    marginHorizontal: 10,
  },
});
