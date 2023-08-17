import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function FindLabour() {
  return (
    <View style={styles.card}>
      <View style={styles.cardImg}>
        <Image
          style={{ width: 140, height: 200, borderRadius: 10 }}
          source={require("../assets/tempImg.png")}
        />
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.details}>
          <Text style={styles.text}>Distance : 10 km</Text>
          <Text style={styles.text}>Money : 10 Rs</Text>
          <TouchableOpacity>
            <Text style={styles.moreText}>More Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1} onPress={()=>{}}>
            <Text style={styles.btnText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={()=>{}}>
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#000000",
    borderWidth: 3,
    width: "90%",
    height: "38%",
    marginHorizontal: "6%",
    marginTop: "8%",
    borderRadius: 12,
    flexDirection: "row",
  },
  cardImg: {
    margin: "5%",
  },
  details: {
    flexDirection: "column",
    marginTop: "25%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: "2%",
  },
  moreText: {
    marginTop: "5%",
    fontSize: 15,
    fontWeight: "bold",
    color: "#40128B",
  },
  btn1: {
    backgroundColor: "#21212F",
    width:120,
    padding: 10,
    height: 40,
    borderRadius: 15,
    marginTop: "12%",
  },
  btn2:{
    backgroundColor: "#31A23F",
    width:120,
    padding: 10,
    height: 40,
    borderRadius: 15,
    marginTop: "12%",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  }
});
