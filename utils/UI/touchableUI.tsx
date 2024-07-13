import { StyleSheet, StyleSheetProperties } from "react-native";
import {
  buttonSizes,
  TouchAbleButtonDimensions,
} from "../../types/UI/TouchableButtonType";

export function getTouchableButtonSizeStyle(
  size: buttonSizes
): TouchAbleButtonDimensions {
  if (size === "sm") {
    return { fontSize: 13 };
  } else if (size === "md") {
    return { fontSize: 18 };
  } else if (size === "lg") {
    return { fontSize: 24 };
  }
  return { fontSize: 30 };
}
