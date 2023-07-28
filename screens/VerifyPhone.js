import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState, useRef } from 'react';

export default function VerifyPhone() {
    const [otp, setOtp] = useState("");
    const otpInputRef = useRef([]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp.join(""));

        if (index < 3 && value) {
            otpInputRef.current[index + 1].focus();
        }
    };
    return (
        <View style={styles}>
            <Text style={styles.headText}>Verify Phone</Text>
            <Text style={styles.normalText}>Code is sent to 8828356473</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.otpInput}
                    value={otp[0]}
                    onChangeText={(value) => handleOtpChange(0, value)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (otpInputRef.current[0] = ref)}
                />
                <TextInput
                    style={styles.otpInput}
                    value={otp[1]}
                    onChangeText={(value) => handleOtpChange(1, value)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (otpInputRef.current[1] = ref)}
                />
                <TextInput
                    style={styles.otpInput}
                    value={otp[2]}
                    onChangeText={(value) => handleOtpChange(2, value)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (otpInputRef.current[2] = ref)}
                />
                <TextInput
                    style={styles.otpInput}
                    value={otp[3]}
                    onChangeText={(value) => handleOtpChange(3, value)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(ref) => (otpInputRef.current[3] = ref)}
                />
            </View>
            <View style={styles.resend}>
                <Text style={styles.questionText}>Didn't receive Otp?</Text>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.resendText}>Resend Otp</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 50,
        marginTop: "20%",
    },
    otpInput: {
        width: 50,
        height: 50,
        // backgroundColor: "#E9EEFF",
        borderWidth: 3,
        fontSize: 24,
        textAlign: "center",
        color: "#647FDE",
        borderRadius: 10,
        borderColor: "#000"
    },
    headText: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "20%",
    },
    normalText: {
        color: "#767677",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "10%"
    },
    resend: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20%",
    },
    questionText: {
        color: "#767677",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",

    },
    resendText: {
        color: "#21212F",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: "1%",
    },
    button: {
        backgroundColor: "#21212F",
        padding: 10,
        height: 66,
        marginHorizontal: 12,
        borderRadius: 24,
        marginTop: "10%",
        justifyContent: "center"
    },
    text: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    }
});
