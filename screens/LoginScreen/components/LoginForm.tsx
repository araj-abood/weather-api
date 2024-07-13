import React from "react";
import { StyleSheet, View } from "react-native";
import FormInput from "../../../components/FormInput";
import TouchableButtons from "../../../components/UI/TouchableButtons";
import { useNavigation } from "@react-navigation/native";
import { type StackNavigation } from "../../../App";
import { useInput } from "../../../hooks/useInput";
import { StoreUsreInStorage } from "../../../async-storage/AsyncStorage";

function LoginForm({}) {
  const navigation = useNavigation<StackNavigation>();

  const {
    value: usernameValue,
    handleChange: handleUsernameChange,
    resetInput: resetUsername,
  } = useInput();

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    resetInput: resetPassword,
  } = useInput();

  const handleLogin = () => {
    if (usernameValue.trim() === "" || passwordValue.trim() === "") return;
    StoreUsreInStorage(usernameValue, passwordValue);
    resetPassword();
    resetUsername();
    navigation.navigate("home");
  };

  return (
    <View style={styles.formStyle}>
      <View style={styles.actionInputsView}>
        <FormInput
          value={usernameValue}
          onChange={handleUsernameChange}
          title="Username"
          type="default"
        />
        <FormInput
          value={passwordValue}
          onChange={handlePasswordChange}
          title="Password"
          isSecure={true}
        />
      </View>
      <View style={styles.buttonActionView}>
        <TouchableButtons
          title="Login"
          backgroundColor="#5FB9FF"
          size="lg"
          paddingY={5}
          onPress={handleLogin}
        />
        <TouchableButtons
          title="Forgot password?"
          size="sm"
          color="#66BCFF"
          mode="underline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    width: "70%",
    maxWidth: 500,
    marginHorizontal: "auto",
    backgroundColor: "white",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  actionInputsView: {
    display: "flex",
    gap: 10,
  },
  buttonActionView: {
    marginTop: 45,
    display: "flex",
    gap: 8,
  },
});

export default LoginForm;
