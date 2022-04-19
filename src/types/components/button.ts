import { ReactElement, ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle> | undefined;
  children?: Iterable<ReactNode> | ReactNode | ReactElement;
  onPress?: () => void;
};
