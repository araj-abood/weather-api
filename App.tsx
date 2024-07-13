import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { CheckUserStoredInstorage } from "./async-storage/AsyncStorage";
import { useEffect } from "react";

export type ScreenNames = ["home", "login"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamlist = {
  login: undefined;
  home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamlist>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="login" component={LoginScreen} />
        <RootStack.Screen name="home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#3BBBFB",
  },
});
