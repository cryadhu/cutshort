import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorPrimaryDark,
  },
  circle: {
    borderWidth: 1,
    borderColor: "#0D164B",
  },
  outerCircle: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderRadius: SCREEN_WIDTH / 2,
    padding: 45,
  },
  innerCircle: {
    flex: 1,
    borderRadius: SCREEN_WIDTH / 2,
    padding: 45,
  },
  absolute: {
    position: "absolute",
  },
  bottomContainer: {
    flex: 1,
  },
  handleBar: {
    height: 7,
    width: 64,
    backgroundColor: "#4E589F",
    borderRadius: 10,
  },
  handle: {
    backgroundColor: "#10194E",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 24,
    marginBottom: -1,
  },
});

export default styles;
