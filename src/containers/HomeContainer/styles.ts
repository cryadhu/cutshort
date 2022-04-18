import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorPrimaryDark,
    paddingHorizontal: 16,
  },
  full: {
    flex: 1,
  },
  balanceHeader: {
    color: "#E7E4E4",
    fontSize: 12,
  },
  amount: {
    marginTop: 16,
  },
  moneyButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
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
  allTransactions: {
    fontSize: 16,
    fontFamily: "InterBold",
    color: "#ffff",
    lineHeight: 24,
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
  },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortBy: {
    color: "#4E589F",
  },
  recent: {
    color: "#DDD9D9",
    marginLeft: 9,
    marginRight: 8,
  },
  recentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
