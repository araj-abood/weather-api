import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TouchableButtons from "../../../components/UI/TouchableButtons";
import { getWeather } from "../../../api/weatherAPI";

type Props = {};

function WeatherOptions({}: Props) {
  const [weatherData, setWeatherData] = useState<{
    icon: string;
    temperature: number;
  }>();

  async function handlePress() {
    const response = await getWeather();
    const { feelslike: temperature, icon } = (await response.data)
      .currentConditions;
    setWeatherData({ temperature, icon });
  }

  return (
    <View style={styles.HomeActionContainer}>
      <Pressable style={[styles.button, styles.nearYou]}>
        <TouchableButtons
          onPress={handlePress}
          size="lg"
          title="Weather near you 🏠"
        />
      </Pressable>
      <Pressable style={[styles.button, styles.elseWhere]}>
        <TouchableButtons
          size="md"
          title="Find How the weather is elsewhere 🌎"
        />
      </Pressable>
      {weatherData && (
        <>
          <Text style={styles.temperature}>{weatherData.temperature} c</Text>
          <Text>{weatherData.icon}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  HomeActionContainer: {
    marginTop: 40,
    gap: 20,
    alignItems: "center",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 20,
  },
  nearYou: {
    backgroundColor: "#71C1FF",
  },
  elseWhere: {
    borderWidth: 2,
    borderColor: "#71C1FF",
  },
  temperature: {
    fontSize: 30,
  },
});

export default WeatherOptions;
