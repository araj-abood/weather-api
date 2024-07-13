import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { removeUserFromStorage } from "../../async-storage/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, StackNavigation } from "../../App";

type Props = {};

function ProfileScreen({}: Props) {
  const navigation = useNavigation<StackNavigation>();
  function onLogout() {
    removeUserFromStorage();
    navigation.navigate("login");
  }

  return (
    <View style={styles.ProfileScreenStyles}>
      <Pressable onPress={onLogout} style={styles.logout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileScreenStyles: {
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logout: {
    borderWidth: 2,
    borderColor: "#CF3F00",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#CF3F00",
  },
});

export default ProfileScreen;
