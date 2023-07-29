import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";
import AuthStack from "./AuthStack";
import BottomTab from "./BottomTab";
import AppStack from "./AppStack";
// import AppStack from "./AppStack";

export default function AppNav() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
