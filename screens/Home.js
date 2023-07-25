import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
            source={require("../assets/home_img.jpg")}
            style={styles.homeimg}
          />
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F3',
    flexDirection:"row",
    justifyContent: 'center',
  },
  homeimg:{
    marginTop:"18%",
    width: 99,
    height: 189
  }
});
