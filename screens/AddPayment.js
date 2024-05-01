import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddPayment() {
    const navigation = useNavigation();
    const [method,setMethod]=useState("Credit Card")
    return (
        <View>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => { navigation.navigate("Tab") }}><Image style={styles.rightImg} source={require("../assets/arrow-left.png")} /></TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", justifyContent: "center", color: "#565657", marginTop: "5%", marginLeft: "10%" }}>Payments Method</Text>
                {/* <Image style={styles.rightImg} source={require("../assets/share.png")} /> */}
            </View>

            <View style={styles.inputView}>

                <View style={styles.subInput}>
                    <Text style={styles.chooseText}>Choose a Payment Method</Text>
                    <View style={[styles.methodView,{borderColor:method=="Credit Card"?"#31A23F":"#EDEDED"}]}>
                        <Image source={require("../assets/visa.png")}/>
                        <Text style={styles.label}>Credit Card</Text>
                        <TouchableOpacity style={[styles.radio]} onPress={()=>{setMethod("Credit Card")}}>
                            <View style={{backgroundColor:method=="Credit Card"?"#31A23F":"#EDEDED",width:15,height:15,borderRadius:20,margin:4}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.methodView,{borderColor:method=="Debit Card"?"#31A23F":"#EDEDED"}]}>
                        <Image source={require("../assets/Debit.png")}/>
                        <Text style={styles.label}>Debit Card</Text>
                        <TouchableOpacity style={[styles.radio]} onPress={()=>{setMethod("Debit Card")}}>
                            <View style={{backgroundColor:method=="Debit Card"?"#31A23F":"#EDEDED",width:15,height:15,borderRadius:20,margin:4}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.methodView,{borderColor:method=="Paypal"?"#31A23F":"#EDEDED"}]}>
                        <Image style={{width:35,height:25}} source={require("../assets/Paypal.jpg")}/>
                        <Text style={[styles.label,{marginLeft:5}]}>Paypal</Text>
                        <TouchableOpacity style={[styles.radio]} onPress={()=>{setMethod("Paypal")}}>
                            <View style={{backgroundColor:method=="Paypal"?"#31A23F":"#EDEDED",width:15,height:15,borderRadius:20,margin:4}}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.methodView,{borderColor:method=="Google Pay"?"#31A23F":"#EDEDED"}]}>
                        <Image style={{width:35,height:25}} source={require("../assets/GooglePay.jpg")}/>
                        <Text style={[styles.label,{marginLeft:5}]}>Google Pay</Text>
                        <TouchableOpacity style={[styles.radio]} onPress={()=>{setMethod("Google Pay")}}>
                            <View style={{backgroundColor:method=="Google Pay"?"#31A23F":"#EDEDED",width:15,height:15,borderRadius:20,margin:4}}></View>
                        </TouchableOpacity>
                    </View>
                </View>
                
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
        fontSize: 18,
        color: "#6B6B6B",
        fontWeight: "bold",
        bottom:3
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
        height: 50,
        marginHorizontal: "10%",
        borderRadius: 15,

        width: "80%",
        justifyContent: "center",
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    chooseText: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom:"3%"
    },
    methodView:{
        flexDirection: "row",
        backgroundColor:"#EDEDED",
        borderRadius:5,     
        padding:10,
        borderWidth:2,
        marginBottom:"4%"
    },
    radio:{
        width:27,
        height:27,
        borderRadius:20,
        borderColor:"#C8C7C7",
        borderWidth:2,
        right:10,
        top:7,
        position:"absolute"
    }
});