import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Svg from "../../assets/svg";
import colors from "../utils/color";
import { TRANSACTION_TYPE } from "../utils/transactions";
import TextView from "./TextView";

const CurrencyIcon = Svg.currency;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  name: {
    fontFamily: "InterBold",
    fontSize: 16,
    color: "#858EC5",
    lineHeight: 24,
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 28,
    alignSelf: "baseline",
    paddingHorizontal: 8,
    borderRadius: 20,
    marginTop: 4,
  },
  type: {
    color: "#ffff",
    fontSize: 12,
    marginLeft: 5,
  },
  currency: {
    width: 16,
    height: 13,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    fontFamily: "InterBold",
    marginLeft: 4,
  },
  evenRow: {
    backgroundColor: "#10194E",
  },
});

const getType = (type: TRANSACTION_TYPE) => {
  switch (type) {
    case TRANSACTION_TYPE.RECEIVED:
      return "Received";
    case TRANSACTION_TYPE.SENT:
      return "Sent";
    case TRANSACTION_TYPE.FAILED:
      return "Error";
  }
};

const getIcon = (type: TRANSACTION_TYPE) => {
  switch (type) {
    case TRANSACTION_TYPE.RECEIVED:
      return Svg.received;
    case TRANSACTION_TYPE.SENT:
      return Svg.sent;
    case TRANSACTION_TYPE.FAILED:
      return Svg.error;
  }
};

const getTypeBg = (type: TRANSACTION_TYPE) => {
  switch (type) {
    case TRANSACTION_TYPE.RECEIVED:
      return colors.received;
    case TRANSACTION_TYPE.SENT:
      return colors.sent;
    case TRANSACTION_TYPE.FAILED:
      return colors.failed;
  }
};

const TransactionItem = (props) => {
  const { name, image, type, amount, index, style } = props;
  const Icon = getIcon(type);
  return (
    <View style={[styles.root, index % 2 == 0 && styles.evenRow, style]}>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.nameContainer}>
        <TextView style={styles.name}>{name}</TextView>
        <View
          style={[
            styles.transactionContainer,
            { backgroundColor: getTypeBg(type) },
          ]}
        >
          <Icon />
          <TextView style={styles.type}>{getType(type)}</TextView>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <CurrencyIcon
          style={styles.currency}
          height="13"
          width="16"
          fill={getTypeBg(type)}
        />
        <TextView style={[styles.amount, { color: getTypeBg(type) }]}>
          {amount}
        </TextView>
      </View>
    </View>
  );
};

export default TransactionItem;
