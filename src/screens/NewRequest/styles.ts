import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorPrimaryDark,
  },
  toolbar: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 999,
  },
});

export default styles;
