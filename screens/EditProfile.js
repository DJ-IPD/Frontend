import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Tab")}}><Image style={styles.rightImg} source={require("../assets/arrow-left.png")} /></TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", justifyContent: "center", color: "#565657", marginTop: "5%" }}>EditProfile</Text>
                <Image style={styles.rightImg} source={require("../assets/share.png")} />
            </View>
            <TouchableOpacity style={styles.avatarView}>
                <Image style={styles.avatarImg} source={require("../assets/tempImg.png")} />
            </TouchableOpacity>
            <View style={styles.inputView}>

                <View style={styles.subInput}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>Update</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        margin: "6.5%",
        justifyContent: "space-between"
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