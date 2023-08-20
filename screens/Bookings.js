import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
const data = [
  {
    id: "1",
    text: "हरियाणा सरकार द्वारा किसानों को हरियाणा कृषि अनुदान उप मिशन के तहत जिन मशीनों पर सब्सिडी दी जा रही है उनमें राइस ड्रायर,और रोटावेटर मशीन शामिल है",
  },
  {
    id: "2",
    text: "प्रधानमंत्री किसान सम्मान निधि योजना के तहत किसानों को हर साल 6 हजार रुपये की आर्थिक मदद दी जाती है.",
  },
  {
    id: "3",
    text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज",
  },
  {
    id: "4",
    text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज",
  },
  {
    id: "5",
    text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज",
  },
  {
    id: "6",
    text: "किनारा कठिन पानी स्वागत संस्कृति सवारी सफाई बर्फ पृथ्वी वनस्पति मिलना बच्चों दिल पश्चिम आवश्यक जानकारी जगह गाना सूरज",
  },
  // Add more items as needed
];
export default function Bookings() {

  const renderItem = ({ item }) => (
    <View
      style={
        item.id % 2 != 0
          ? {
              backgroundColor: "#FEE0CA",
              height: 160,
              borderRadius: 10,
              width: "85%",
              marginHorizontal: 30,
              marginTop: 10,
            }
          : {
              backgroundColor: "#FAFFC4",
              height:160,
              borderRadius: 10,
              width: "85%",
              marginHorizontal: 30,
              marginTop: 10,
            }
      }
    >
      <Text style={styles.newsText}>{item.text}</Text>
      
    </View>
  );

  return (
    <View>
      <Text style={styles.mainText}>Bookings</Text>
      
      <FlatList
        style={{width:"100%",height:"72%"}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
          // Set this to make the list horizontal
      />

    </View>
  )
}

const styles=StyleSheet.create({
  mainText:{
    fontSize:35,
    textAlign:'center',
    marginVertical:"4%",
    fontWeight:"bold"
  }
})