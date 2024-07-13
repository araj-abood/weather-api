import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./components/LoginForm";

import { RootStackParamlist } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CheckUserStoredInstorage } from "../../async-storage/AsyncStorage";

type LoginScreenProps = NativeStackScreenProps<RootStackParamlist, "login">;

function LoginScreen({ navigation }: LoginScreenProps) {
  useEffect(() => {
    async function checkUser() {
      const isUserLoggedIn = await CheckUserStoredInstorage();

      if (isUserLoggedIn) navigation.navigate("home");
    }
    checkUser();
  }, []);

  return (
    <View style={styles.screenView}>
      <View style={styles.haeder}>
        <Text style={styles.headerText}>☀️</Text>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: "#3BBBFB",
    flex: 1,
    paddingTop: 50,
  },
  haeder: {
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
  },
});

export default LoginScreen;
