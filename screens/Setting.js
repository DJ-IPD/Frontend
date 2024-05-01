import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Toggle from "react-native-toggle-element";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Setting() {
  const [toggleValue, setToggleValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.topBar}>
        <Image style={styles.settingImg} source={require("../assets/Setting-tab.png")} />
        <Text style={{ color: "#565657", fontSize: 28, fontWeight: "bold", marginHorizontal: "3%" }}>Settings</Text>
      </View>
      <View style={styles.AvatarView}>
        <Image style={styles.avatarImg} source={require("../assets/tempImg.png")} />
        <Text style={{ fontSize: 18, color: "#000000", margin: "3.5%", fontWeight: 500 }}>Farmer Name</Text>
      </View>
      <View
        style={{
          borderBottomColor: "rgba(202,202,202,0.5)",
          borderBottomWidth: 1,
          width: "85%",
          marginHorizontal: "7%",
        }}
      />
      <View>
        <View>
          <Text style={{ fontSize: 18, color: "#ADADAD", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Account Settings</Text>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate("EditProfile")
        }}>
          <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Edit Profile</Text>
          <Image style={styles.rightImg} source={require("../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
          navigation.navigate("ChangePassword")
        }}>
          <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Change Password</Text>
          <Image style={styles.rightImg} source={require("../assets/right.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("AddPayment")}}>
          <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Add a Payment Method</Text>
          <Image style={styles.rightImg} source={require("../assets/plusg.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Push Notifications</Text>
          <View style={{
            position: "absolute",
            right: "10%",
            top: "23%"
          }}>
            <Toggle
              value={toggleValue}
              onPress={(val) => setToggleValue(val)}
              trackBar={{
                width: 55,
                height: 30,
                radius: 25,
                activeBackgroundColor: "#42BD4E",
                inActiveBackgroundColor: "#5A5A5A",
                borderWidth: 8,
              }}
              thumbButton={{
                width: 35,
                height: 35,
                borderWidth: 5,
                padding: 10,
                inActiveBackgroundColor: "#ffffff",
                activeBackgroundColor: "#fffffff",
              }}

            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "rgba(202,202,202,0.5)",
            borderBottomWidth: 1,
            width: "85%",
            marginHorizontal: "7%",
            marginTop: "5%"
          }}
        />
        <View>
          <View>
            <Text style={{ fontSize: 18, color: "#ADADAD", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>More</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>About Us</Text>
            <Image style={styles.rightImg} source={require("../assets/right.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "#000000", marginVertical: "3.5%", marginLeft: "10.5%", fontWeight: 500 }}>Privacy Policy</Text>
            <Image style={styles.rightImg} source={require("../assets/right.png")} />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  settingImg: {
    width: 35,
    height: 35
  },
  topBar: {
    flexDirection: 'row',
    margin: "6.5%"
  },
  avatarImg: {
    width: 45,
    height: 45,
    borderRadius: 20
  },
  AvatarView: {
    flexDirection: "row",
    margin: "2.5%",
    marginHorizontal: "7.5%"
  },
  rightImg: {
    width: 24,
    height: 24,
    position: "absolute",
    right: "10%",
    top: "25%"
  }
});