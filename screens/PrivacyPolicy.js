import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PrivacyPolicy() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => { navigation.navigate("Tab") }}><Image style={styles.rightImg} source={require("../assets/arrow-left.png")} /></TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", justifyContent: "center", color: "#565657", marginTop: "5%", marginLeft: "18%" }}>Privacy Policy</Text>
                {/* <Image style={styles.rightImg} source={require("../assets/share.png")} /> */}
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>At FarmVest, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our mobile application.</Text>
                <Text style={styles.text}>Information Collection:
                    We collect personal information provided by users during registration, including name, contact details, and location.
                    We may also collect non-personal information such as device information, usage data, and analytics to improve our services.</Text>
                <Text style={styles.text}>Use of Information:
                    Personal information is used to facilitate job matchmaking between farmers and laborers, customize user experience, and provide support services.
                    Non-personal information is utilized for analytics, app optimization, and research purposes.</Text>
                <Text style={styles.text}>Data Sharing:
                    We may share personal information with trusted third-party service providers to facilitate app functionality, such as payment processing and location services.
                    Your data may be shared with government authorities or law enforcement agencies when required by law or to protect our rights and interests.</Text>
                <Text style={styles.text}>Data Security:
                    We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                    Despite our best efforts, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</Text>
                <Text style={styles.text}>User Controls:
                    Users have the option to review, update, or delete their personal information through the app settings.
                    You may also choose to opt-out of certain data collection and processing activities, although this may affect the functionality of the app.</Text>
                <Text style={styles.text}>Changes to Privacy Policy:
                    We reserve the right to modify or update this Privacy Policy at any time. Changes will be communicated through the app or our website.
                    By using Farmvest, you consent to the collection and use of your information as described in this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us at farmvest@gmail.com. Thank you for trusting us with your data.</Text>

            </View>

        </ScrollView>
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
    inputView: {
        marginHorizontal: "4%",

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
        color: "#565657",
        textAlign: "justify",
        fontSize: 14,
        fontWeight: "bold",

    }
});