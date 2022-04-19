import { StyleSheet } from "react-native";
import colors from "../../utils/color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 73,
  },
  full: {
    flex: 1,
  },
  outerCircle: {
    backgroundColor: "#10194E",
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  innerCircle: {
    backgroundColor: "#192259",
    height: 150,
    width: 150,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  sendProf: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    color: "#EEEEEE",
    fontFamily: "InterBold",
    fontSize: 24,
    lineHeight: 32,
    marginTop: 24,
  },
  requesting: {
    color: "#EEEEEE",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 24,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  amount: {
    color: "#EEEEEE",
    fontFamily: "InterBold",
    fontSize: 40,
    lineHeight: 48,
    marginLeft: 8,
  },
  button: {
    height: 60,
    minWidth: 173,
  },
  send: {
    marginTop: 48,
    backgroundColor: "#FF2E63",
  },
  dontSend: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#464E8A",
    marginTop: 24,
  },
  requestBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -187,
  },
  sendTitle: {
    color: colors.white,
  },
  donSendTitle: {
    color: "#464E8A",
  },
});

export default styles;
