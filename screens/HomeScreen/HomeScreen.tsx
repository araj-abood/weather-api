import React from "react";
import { Image, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherScreen from "../WeatherScreen.tsx/WeatherScreen";
import ProfileScreen from "../Profilescreen/ProfileScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const name = "Abdullah Al-araj";
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="weather"
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/home.png")}
              />
            );
          },
        }}
        name="weather"
        component={WeatherScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/user.png")}
              />
            );
          },
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 50,
    position: "relative",
  },
});

export default HomeScreen;
