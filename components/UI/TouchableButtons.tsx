import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TouchableButtonProps } from "../../types/UI/TouchableButtonType";
import { getTouchableButtonSizeStyle } from "../../utils/UI/touchableUI";

function TouchableButtons({
  title,
  mode = "fill",
  color = "black",
  backgroundColor = "",
  size = "md",
  paddingY = 0,
  onPress,
}: TouchableButtonProps) {
  const fontSizeText = getTouchableButtonSizeStyle(size);

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: backgroundColor, paddingVertical: paddingY },
        styles.touchableStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            color,
            textDecorationLine: mode === "underline" ? "underline" : "none",
          },
          fontSizeText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableStyle: {
    alignItems: "center",
  },
});

export default TouchableButtons;
