import { Animated, StyleProp, ViewStyle } from "react-native";

export type ToolBarProps = {
  back: boolean;
  title?: string;
  animated?: boolean;
  style?: StyleProp<ViewStyle> | Animated.AnimatedProps<unknown>;
  onSearch?: (query: string) => void;
};
