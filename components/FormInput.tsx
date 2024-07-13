import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  title: string;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  isSecure?: boolean;
  value: string;
  onChange: (newText: string) => void;
};

function FormInput({
  title,
  type = "default",
  placeholder,
  isSecure = false,
  value,
  onChange,
}: Props) {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        style={styles.inputStyle}
        secureTextEntry={isSecure}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "",
    marginTop: 4,
    height: 30,
    fontSize: 18,
  },
});

export default FormInput;
