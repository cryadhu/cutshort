import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  root: {
    fontFamily: "InterRegular",
  },
});

const TextView = (props: TextProps) => {
  return <Text style={styles.root} {...props} />;
};

export default TextView;
