import { StyleSheet, View } from "react-native";

import { IntroItemProps } from "../types/components/introItem";
import colors from "../utils/color";
import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {},
  title: {
    fontFamily: "InterBold",
    fontSize: 18,
    lineHeight: 30,
    color: colors.white,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#FAFAFA",
  },
});

const IntroItem = (props: IntroItemProps) => {
  const { title, description, style } = props;
  return (
    <View style={[styles.root, style]}>
      <TextView style={styles.title}>{title}</TextView>
      <TextView style={styles.description}>{description}</TextView>
    </View>
  );
};

export default IntroItem;
