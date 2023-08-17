import { View, Text, FlatList, StyleSheet } from "react-native";
import { SvgUri, SvgXml } from "react-native-svg";
import React from "react";
const data = [
  {
    id: "1",
    text: "हरियाणा सरकार द्वारा किसानों को हरियाणा कृषि अनुदान उप मिशन के तहत जिन मशीनों पर सब्सिडी दी जा रही है उनमें राइस ड्रायर,और रोटावेटर मशीन शामिल है",
  },
  {
    id: "2",
    text: "प्रधानमंत्री किसान सम्मान निधि योजना के तहत किसानों को हर साल 6 हजार रुपये की आर्थिक मदद दी जाती है.",
  },
  {
    id: "3",
    text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज",
  },
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
export default function NewsComponent() {
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
              height: "60%",
              borderRadius: 30,
              width: 150,
              marginLeft: 20,
              marginTop: 10,
            }
          : {
              backgroundColor: "#FAFFC4",
              height: "60%",
              borderRadius: 30,
              width: 150,
              marginLeft: 20,
              marginTop: 10,
            }
      }
    >
      <Text style={styles.newsText}>{item.text}</Text>
    </View>
  );
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: "4%",
          marginTop: "6%",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>समाचार</Text>
        <SvgXml width="20" height="20" xml={filterXml} />
      </View>
      <FlatList
        style={{ height: "50%", width: "100%" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set this to make the list horizontal
      />
    </>
  );
}
const styles = StyleSheet.create({
  newsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: "20%",
    marginHorizontal: "10%",
  },
});
