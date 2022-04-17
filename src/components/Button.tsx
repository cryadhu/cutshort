import { StyleSheet, TextProps, TouchableOpacity } from "react-native";
import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {
    fontFamily: "InterRegular",
    paddingVertical: 12,
    paddingHorizontal: 23,
    backgroundColor: "#ffff",
    alignSelf: "baseline",
    borderRadius: 10,
    fontSize: 16,
  },
  title: {
    lineHeight: 30,
  },
});

const Button = (props) => {
  const { title, titleStyle, style } = props;
  return (
    <TouchableOpacity style={[styles.root, style]}>
      <TextView style={[styles.title, titleStyle]}>{title}</TextView>
    </TouchableOpacity>
  );
};

export default Button;
