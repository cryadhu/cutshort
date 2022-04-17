import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },
  viewPagerContainer: {
    backgroundColor: colors.colorPrimary,
    alignSelf: "flex-end",
    paddingLeft: 32,
    paddingRight: 50,
    paddingBottom: 20,
    paddingTop: 32,
    flex: 1,
    borderTopRightRadius: 70,
  },
  introItem: {
    paddingBottom: 14,
  },
  indicator: {
    marginBottom: 16,
  },
});

export default styles;
