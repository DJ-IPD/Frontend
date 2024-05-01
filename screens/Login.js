// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   Switch,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { useState } from "react";
// import Toggle from "react-native-toggle-element";
// import { useNavigation } from "@react-navigation/native";

// export default function CreateAccount() {
//   const navigation = useNavigation();
//   const hanglesignup = () => {
//     navigation.navigate("SignUp")
//   }
//   const handleLogin=()=>{
//     navigation.navigate("VerifyPhone");
//   }
//   const [toggleValue, setToggleValue] = useState(false);
//   const [text, onChangeText] = useState("Useless Text");
//   const [number, onChangeNumber] = useState("");
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../assets/home_img.png")}
//         style={styles.homeimg}
//       />
//       <View style={styles.greet}>
//         <Text style={{ fontSize: 24, fontWeight: "bold" }}>
//           Welcome to Farmvest
//         </Text>
//       </View>

//       <View style={styles.toggle}>
//         <Toggle
//           value={toggleValue}
//           onPress={(val) => setToggleValue(val)}
//           trackBar={{
//             width: 80,
//             height: 40,
//             radius: 25,
//             activeBackgroundColor: "#42BD4E",
//             inActiveBackgroundColor: "#5A5A5A",
//             borderWidth: 8
//           }}
//           thumbButton={{
//             width: 40,
//             height: 40,
//             borderWidth: 5,
//             padding: 50,
//             inActiveBackgroundColor: "#ffffff",
//             activeBackgroundColor: "#fffffff",
//           }}
//         />
//         {toggleValue ? (
//           <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
//             Farmer
//           </Text>
//         ) : (
//           <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
//             Labourer
//           </Text>
//         )}
//       </View>
//       <View>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeNumber}
//           keyboardType="phone-pad"
//           placeholder="Enter phone number"
//           value={number}
//           maxLength={10}
//           fontSize={16}
//           padding={15}
//         />
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleLogin}
//         >
//           <Text style={styles.text}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity

//           style={styles.button}
//           onPress={hanglesignup}
//         >
//           <Text style={styles.text}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0F0F3",
//   },
//   homeimg: {
//     marginTop: "18%",
//     width: 99,
//     height: 189,
//     marginHorizontal: "39%",
//   },
//   greet: {
//     marginTop: "5%",
//     alignItems: "center",
//   },
//   toggle: {
//     flexDirection: "row",
//     marginTop: "10%",
//     marginLeft: "5%",
//   },
//   input: {
//     height: 66,
//     margin: 12,
//     borderWidth: 3,
//     borderRadius: 20,
//     padding: 10,
//     letterSpacing: 1.3
//   },
//   button: {
//     backgroundColor: "#21212F",
//     padding: 10,
//     height: 66,
//     marginHorizontal: 12,
//     borderRadius: 24,
//     marginTop: "3%",
//     justifyContent: "center"
//   },
//   text: {
//     color: "#ffffff",
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//   }
// });


import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Switch,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'; // Import axios for making HTTP requests

export default function CreateAccount() {
  const navigation = useNavigation();
  
  const handleSignup = () => {
    navigation.navigate("SignUp");
  }
  
  const handleLogin = () => {
    // Prepare data object for login request
    const data = {
      phoneNo: number,
      password: password,
    };
    const url = 'https://humble-space-spoon-q5vjp69wxqvfxwp9-8000.app.github.dev/login/';

    // Make POST request to login endpoint
    axios.post(url, null, {
      params: {
        phoneNo: number,
        password: password
      },
      headers: {
        'accept': 'application/json'
      }
    })
    .then(response => {
      // Handle response
      navigation.navigate("Tab");
      console.log('Login successful:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error logging in:', error);
    });
  }
  
  const [toggleValue, setToggleValue] = useState(false);
  const [number, onChangeNumber] = useState("");
  const [password, setPassword] = useState(""); // State for password

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/home_img.png")}
        style={styles.homeimg}
      />
      <View style={styles.greet}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Welcome to Farmvest
        </Text>
      </View>

      <View style={styles.toggle}>
        <Switch
          value={toggleValue}
          onValueChange={(val) => setToggleValue(val)}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          {toggleValue ? "Farmer" : "Labourer"}
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={number}
          maxLength={10}
          fontSize={16}
          padding={15}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true} // For hiding password characters
          placeholder="Enter password"
          value={password}
          fontSize={16}
          padding={15}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F3",
  },
  homeimg: {
    marginTop: "18%",
    width: 99,
    height: 189,
    marginHorizontal: "39%",
  },
  greet: {
    marginTop: "5%",
    alignItems: "center",
  },
  toggle: {
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: "5%",
  },
  input: {
    height: 66,
    margin: 12,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    letterSpacing: 1.3
  },
  button: {
    backgroundColor: "#21212F",
    padding: 10,
    height: 66,
    marginHorizontal: 12,
    borderRadius: 24,
    marginTop: "3%",
    justifyContent: "center"
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
});
