import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function PriceCalculator() {
  const [cropType, setCropType] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [noOfPeople, setNoOfPeople] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const navigation = useNavigation();

  const calculatePrice = () => {
    // Prepare data object for the request
    const data = {
      Working_Hours: workingHours,
      Crop_Type: cropType,
      NoOfpeople: noOfPeople
    };

    // Make the POST request
    axios.post('https://humble-space-spoon-q5vjp69wxqvfxwp9-8000.app.github.dev/price-calculator', data, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Handle successful response
      AsyncStorage.setItem('price', response.data.Calculated_Price.toString());
      AsyncStorage.setItem('working_hours',workingHours);
      AsyncStorage.setItem('crop_type',cropType);
      AsyncStorage.setItem('people',noOfPeople);
      setCalculatedPrice(response.data.Calculated_Price);
      navigation.navigate("AcceptWorkerScreen");

    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Crop Type"
        onChangeText={text => setCropType(text)}
        value={cropType}
      />
      <TextInput
        style={styles.input}
        placeholder="Working Hours"
        onChangeText={text => setWorkingHours(text)}
        value={workingHours}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        onChangeText={text => setNoOfPeople(text)}
        value={noOfPeople}
        keyboardType="numeric"
      />
      <Button title="Calculate Price" onPress={calculatePrice} />
      {calculatedPrice !== null && (
        <Text style={styles.result}>
          Calculated Price: {calculatedPrice}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
