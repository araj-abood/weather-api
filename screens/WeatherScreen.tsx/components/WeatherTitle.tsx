import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = { name: string };

function WeatherTitle({ name }: Props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>Welcome Back, {name}👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: { paddingLeft: 5 },
  text: { fontSize: 18, fontWeight: "700" },
});

export default WeatherTitle;
