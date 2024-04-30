import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChangePassword() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Tab")}}><Image style={styles.rightImg} source={require("../assets/arrow-left.png")} /></TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", justifyContent: "center", color: "#565657", marginTop: "5%",marginLeft:"10%" }}>Change Password</Text>
                {/* <Image style={styles.rightImg} source={require("../assets/share.png")} /> */}
            </View>
           
            <View style={styles.inputView}>

                <View style={styles.subInput}>
                    <Text style={styles.label}>Old Password</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        margin: "6.5%",
        // justifyContent: "space-between"
    },
    avatarView: {
        justifyContent: "center",
        alignItems: "center"
    },
    avatarImg: {
        borderRadius: 70,
        width: 140,
        height: 140,
        borderColor: "#fFffff",
        borderWidth: 4
    },
    label: {
        fontSize: 14,
        color: "#000000",
        fontWeight: "bold",
        marginLeft: "2%",
        marginTop: "6%",
        marginBottom: "3%"
    },
    inputs: {
        borderWidth: 1,
        borderColor: "#A9A9A9",
        width: "100%",
        height: "13%",
        borderRadius: 5
    },
    subInput: {
        marginHorizontal: "10%"
    },
    button: {
        backgroundColor: "#31A23F",
        padding: 10,
        height:50,
        marginHorizontal: "10%",
        borderRadius: 15,

        width:"80%",
        justifyContent:"center",
      },
      text:{
        color:"#ffffff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
      }
});