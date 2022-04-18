import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorPrimaryDark,
  },
  full: {
    flex: 1,
  },
  balanceHeader: {
    color: "#E7E4E4",
    fontSize: 12,
    marginLeft: 16,
  },
  amount: {
    marginTop: 16,
    marginLeft: 16,
  },
  moneyButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginLeft: 16,
  },
  moneyButton: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#464E8A",
  },
  moneyTitle: {
    color: "#464E8A",
    fontSize: 16,
    fontFamily: "InterBold",
  },
  requestButton: {
    marginRight: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 48,
    marginHorizontal: 16,
  },
  name: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 16,
    fontFamily: "InterBold",
    flex: 1,
  },
  addMoney: {
    backgroundColor: "#212A6B",
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 8,
  },
  addMoneyTitle: {
    fontSize: 14,
    fontFamily: "InterBold",
    color: "#426DDC",
    lineHeight: 24,
  },
  transactions: {
    paddingHorizontal: 16,
  },
});

export default styles;
