import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, onChangeName] = useState("");
  const [number, onChangeNumber] = useState("");
  const [location, onChangeLocation] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/createAccountImg.png")}
        style={styles.img}
      />
      <View style={styles.greet}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginVertical: "5%",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          keyboardType="ascii-capable"
          placeholder="Enter your name"
          value={name}
          maxLength={10}
          fontSize={16}
          padding={15}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={number}
          maxLength={10}
          fontSize={16}
          padding={15}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLocation}
          keyboardType="phone-pad"
          placeholder="Enter your current location"
          value={location}
          fontSize={16}
          padding={15}
        />
      </View>
      <View style={styles.map}>
        <Image
          source={require("../assets/map_marker.png")}
          style={styles.mapMark}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: "#767677",
            marginTop: "0.8%",
            marginLeft: "1%",
          }}
        >
          Give map access
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(email, password);
        }}
      >
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F3",
  },
  img: {
    marginTop: "20%",
    width: 154,
    height: 196,
    marginHorizontal: "30%",
  },
  input: {
    height: 66,
    marginHorizontal: 12,
    marginVertical: 5,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    letterSpacing: 1.3,
  },
  map: {
    flexDirection: "row",
    margin: "3%",
  },
  button: {
    backgroundColor: "#21212F",
    padding: 10,
    height:66,
    marginHorizontal: 12,
    borderRadius: 24,
    marginTop:"3%",
    justifyContent:"center"
  },
  text:{
    color:"#ffffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
});
