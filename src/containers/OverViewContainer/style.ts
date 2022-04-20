import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flex: 1,
  },
  viewPagerContainer: {
    backgroundColor: colors.colorPrimary,
    alignSelf: "flex-end",
    paddingLeft: 32,
    paddingRight: 50,
    paddingBottom: 20,
    paddingTop: 32,
    borderTopRightRadius: 70,
    marginRight: 52,
    flex: 1,
  },
  introItem: {
    paddingBottom: 14,
  },
  indicator: {
    marginBottom: 16,
  },
  startBanking: {
    color: "#17288E",
    fontSize: 16,
  },
  startBankingButton: {
    alignSelf: "baseline",
    paddingHorizontal: 23,
  },
});

export default styles;
