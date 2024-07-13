type buttonSizes = "sm" | "md" | "lg" | "xl";

type TouchableButtonProps = {
  title: string;
  mode?: "fill" | "underline";
  color?: string;
  backgroundColor?: string;
  size?: buttonSizes;
  onPress?: () => void;
  paddingY?: number;
};

export type TouchAbleButtonDimensions = {
  fontSize: number;
};

export { buttonSizes, TouchableButtonProps };
