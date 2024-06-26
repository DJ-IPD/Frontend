import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SvgUri, SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    text: "हरियाणा सरकार द्वारा किसानों को हरियाणा कृषि अनुदान उप मिशन के तहत जिन मशीनों पर सब्सिडी दी जा रही है उनमें राइस ड्रायर, लेजर लैंड लेवलर, स्ट्रॉ बेलर,रीपर बाइंडर और रोटावेटर मशीन शामिल है",
  },
  {
    id: "2",
    text: "प्रधानमंत्री किसान सम्मान निधि योजना के तहत किसानों को हर साल 6 हजार रुपये की आर्थिक मदद दी जाती है.",
  },
  { id: "3", text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज" },
  { id: "4", text: "Item 5" },
  { id: "5", text: "Item 6" },
  { id: "6", text: "Item 7" },
  { id: "7", text: "Item 8" },
  { id: "8", text: "Item 9" },
  { id: "9", text: "Item 10" },
  { id: "10", text: "Item 11" },
  { id: "11", text: "Item 12" },
  { id: "12", text: "Item 13" },
  { id: "13", text: "Item 14" },
  { id: "14", text: "Item 15" },
  { id: "15", text: "Item 16" },
  { id: "16", text: "Item 17" },
  { id: "17", text: "Item 18" },
  { id: "18", text: "Item 19" },
  // Add more items as needed
];
export default function Home() {
  const navigation = useNavigation();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0C9.82233 0 5.625 4.19733 5.625 9.375V14.901C5.625 14.9936 5.59761 15.0841 5.54627 15.1611L2.3529 19.9511C2.04128 20.4185 1.875 20.9677 1.875 21.5295C1.875 23.101 3.14897 24.375 4.72048 24.375H25.2795C26.851 24.375 28.125 23.101 28.125 21.5295C28.125 20.9677 27.9587 20.4185 27.6471 19.9511L24.4537 15.1611C24.4024 15.0841 24.375 14.9936 24.375 14.901V9.375C24.375 4.19733 20.1777 0 15 0Z" fill="#F23535"/>
<path d="M18.7211 26.7178C18.4908 28.5681 16.9126 30 15 30C13.0874 30 11.5092 28.5681 11.2789 26.7178C11.2469 26.4609 11.4599 26.25 11.7188 26.25H18.2812C18.5401 26.25 18.7531 26.4609 18.7211 26.7178Z" fill="#F23535"/>
</svg>
`;
  const filterXml = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.89583 17.5V12.8125H10.1458V14.5417H17.5V15.7917H10.1458V17.5H8.89583ZM2.5 15.7917V14.5417H7.64583V15.7917H2.5ZM6.39583 12.3333V10.625H2.5V9.375H6.39583V7.625H7.64583V12.3333H6.39583ZM8.89583 10.625V9.375H17.5V10.625H8.89583ZM12.3542 7.1875V2.5H13.6042V4.20833H17.5V5.45833H13.6042V7.1875H12.3542ZM2.5 5.45833V4.20833H11.1042V5.45833H2.5Z" fill="black"/>
</svg>
`;

  const renderItem = ({ item }) => (
    <View
      style={
        item.id % 2 != 0
          ? {
              backgroundColor: "#FEE0CA",
              height: "85%",
              borderRadius: 30,
              width: 150,
              marginLeft: 20,
              marginTop:10
            }
          : {
              backgroundColor: "#FAFFC4",
              height: "85%",
              borderRadius: 30,
              width: 150,
              marginLeft: 20,
              marginTop:10,
            }
      }
    >
      <Text style={styles.newsText}>{item.text}</Text>
    </View>
  );
  return (
    <View>
      <View
        style={{ flexDirection: "row-reverse", right: 15, marginTop: "3%" }}
      >
        <SvgXml width="30" height="30" xml={xml} />
      </View>
      <View>
        <Text style={styles.mainText}>आपका स्वागत है</Text>
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
            मुम्बई, Maharashtra
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: "5%" }}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("FindPage")}}>
          <View style={{ flexDirection: "row", marginHorizontal: 8 }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            >
              <LinearGradient
                style={{ borderRadius: 20 }}
                colors={["#30CAC1", "#C5FE7E", "#F7FB57"]}
              >
                <Image
                  source={require("../assets/notes.png")}
                  style={{ margin: 6 }}
                />
              </LinearGradient>
            </View>
            <Text style={styles.btnText}>मजदूर ढूंढे</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#F0F0F3",
                width: 40,
                height: 40,
                borderRadius: 20,
                position:"absolute",
                right:0
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "4%",
          marginTop: "6%",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>News</Text>
        <SvgXml width="20" height="20" xml={filterXml} />
      </View>

      <FlatList
        style={{ height: "50%", width: "100%" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set this to make the list horizontal
      />
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
  item: {},
  newsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: "20%",
    marginHorizontal: "10%",
  },
});
