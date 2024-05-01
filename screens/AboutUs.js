import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChangePassword() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => { navigation.navigate("Tab") }}><Image style={styles.rightImg} source={require("../assets/arrow-left.png")} /></TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: "bold", justifyContent: "center", color: "#565657", marginTop: "5%", marginLeft: "25%" }}>About Us</Text>
                {/* <Image style={styles.rightImg} source={require("../assets/share.png")} /> */}
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>Welcome to FarmVest, where we revolutionize the agricultural labor market by bridging the gap between farmers and laborers.</Text>
                <Text style={styles.text}>At FarmVest, we are driven by a vision to transform the way agricultural work is conducted in India. With a deep understanding of the challenges faced by both farmers and laborers, we have developed a pioneering mobile application to address these issues head-on.</Text>
                <Text style={styles.text}>Our team is comprised of passionate individuals from diverse backgrounds, including agriculture, technology, and economics. Together, we leverage our expertise to create innovative solutions that empower users and uplift rural communities.</Text>
                <Text style={styles.text}>Through our platform, farmers gain access to a pool of skilled laborers, ensuring timely completion of tasks and increased productivity. Likewise, laborers can easily find suitable job opportunities, leading to enhanced income and improved livelihoods.
                    What sets us apart is our commitment to customization and empowerment. With FarmVest, users have the flexibility to customize fee settings, ensuring fair compensation for their work. Moreover, our migration insights provide valuable information to both farmers and laborers, facilitating informed decision-making.</Text>
                <Text style={styles.text}>Trust, transparency, and technology are at the core of everything we do. We believe in fostering strong relationships between farmers and laborers, promoting data-driven decision-making, and driving economic growth in rural areas.
Though we recognize the challenges ahead, such as user adoption and internet connectivity, we remain steadfast in our mission to revolutionize the agricultural labor market. Together, let's build a future where agriculture thrives, and rural communities flourish. Welcome to the FarmVest family.</Text>
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