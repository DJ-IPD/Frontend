import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
const data = [
  {
    id: "1",
    text: "Rice Harvest",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Details",
  },
  {
    id: "2",
    text: "Wheat Harvest",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Done",
  },
  {
    id: "3",
    text: "Wheat Harvest",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Details",
  },
  {
    id: "4",
    text: "Wheat Harvest",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Details",
  },
  {
    id: "5",
    text: "Wheat Harvest",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Details",
  },
  {
    id: "6",
    text: "हरियाणा सरकार द्वारा किसानों को हरियाणा कृषि अनुदान उप मिशन के तहत जिन मशीनों पर सब्सिडी दी जा रही है उनमें राइस ड्रायर,और रोटावेटर मशीन शामिल है",
    time: "10:15 PM",
    date: "10-March",
    price: "5000",
    status: "Details",
  },
  // Add more items as needed
];
export default function Bookings() {
  const renderItem = ({ item }) => (
    <View
      style={
        item.status == "Details"
          ? {
              backgroundColor: "#E9FCE6",
              height: 160,
              borderRadius: 10,
              width: "85%",
              marginHorizontal: 30,
              marginTop: 10,
            }
          : {
              backgroundColor: "#FFEEE0",
              height: 160,
              borderRadius: 10,
              width: "85%",
              marginHorizontal: 30,
              marginTop: 10,
            }
      }
    >
      <Text style={styles.text}>{item.text}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "20%",
              marginVertical: "10%",
            }}
          >
            <Image source={require("../assets/clock.png")} />
            <Text style={styles.smallText}>{item.time}</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "20%" }}>
            <Image source={require("../assets/calender.png")} />
            <Text style={styles.smallText}>{item.date}</Text>
          </View>
        </View>
        <View style={{flexDirection:"column"}}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "10%",
              marginTop: "15%",
            }}
          >
            <Image source={require("../assets/rupee.png")} />
            <Text
              style={{
                color: "#565657",
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: "10%",
              }}
            >
              {item.price}
            </Text>
          </View>
          <View style={item.status == "Details"?{marginTop:"15%",backgroundColor:"#31A23F",borderRadius:30,height:30}:{marginTop:"15%",backgroundColor:"#E77913",borderRadius:30,height:30}}>
            <Text style={{fontSize:14,color:"#ffffff",fontWeight:"bold",textAlign:"center",marginVertical:"4%"}}>{item.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.mainText}>Bookings</Text>

      <FlatList
        style={{ width: "100%", height: "72%" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Set this to make the list horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: "4%",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "7.5%",
  },
  smallText: {
    color: "#565657",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "2.5%",
  },
});
