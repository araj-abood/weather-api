import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WeatherTitle from "./components/WeatherTitle";
import WeatherOptions from "./components/WeatherOptions";
import { getUserFromStorage } from "../../async-storage/AsyncStorage";

type Props = {};

function WeatherScreen({}: Props) {
  const [userData, setUserData] = useState<{
    username: string;
    password: string;
  }>();

  useEffect(() => {
    async function getUser() {
      const user = await getUserFromStorage();
      setUserData(user);
    }
    getUser();
  });

  if (!userData?.username) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.weatherScreenContainer}>
      <WeatherTitle name={userData?.username} />
      <WeatherOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  weatherScreenContainer: {
    paddingTop: 50,
  },
});

export default WeatherScreen;
