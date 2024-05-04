import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AcceptWorkerScreen = () => {
    const navigation = useNavigation();
    const [price, setPrice] = useState("");

    const [cropType, setCropType] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const [noOfPeople, setNoOfPeople] = useState('');
    const [uid,setUID]=useState('');
    const getPrice = async () => {
        setUID(await AsyncStorage.getItem('UID'));
        setPrice(await AsyncStorage.getItem('price'));
        setCropType(await AsyncStorage.getItem('crop_type'));
        setWorkingHours(await AsyncStorage.getItem('working_hours'));
        setNoOfPeople(await AsyncStorage.getItem('people'));
    }
    getPrice();
    function generateRandomNumber(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString();
      }
      
      // Example usage:
    const randomNumber = generateRandomNumber(1, 100);

    console.log(uid);
    console.log(workingHours);
    console.log(noOfPeople);
    console.log(cropType);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                It will cost you: {price}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    axios.post(
                        'https://humble-space-spoon-q5vjp69wxqvfxwp9-8000.app.github.dev/allocate-workers/?num_workers=5&fixed_price=150',
                        {
                            UID: uid,
                            name: 'manie',
                            Working_Hours: parseInt(workingHours),
                            Crop_Type: cropType,
                            NoOfpeople: parseInt(noOfPeople),
                            booking_id: '123'
                        },
                        {
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                          }
                        }
                      ).then((res)=>console.log(res))
                      .catch((err)=>{console.log(err)});
                }}>
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { 
                    navigation.navigate('Tab');
                }}>
                    <Text>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
});

export default AcceptWorkerScreen;
