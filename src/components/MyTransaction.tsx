import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Images from "../../assets/images";

import Svg from "../../assets/svg";
import mockData from "../mock/transactions.json";
import { TRANSACTION_TYPE } from "../utils/transactions";
import Button from "./Button";
import TextView from "./TextView";
import TransactionItem from "./TransactionItem";

const DownIcon = Svg.down;

const styles = StyleSheet.create({
  full: {
    flex: 1,
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
    marginBottom: 32,
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

const getImage = (index: number) => {
  switch (index) {
    case 0:
      return Images.prof1;
    case 1:
      return Images.prof2;
    case 2:
      return Images.prof3;
    case 3:
      return Images.prof4;
  }
};

const MyTransaction = (props) => {
  const { style } = props;
  const renderItem = ({ item, index }) => {
    return (
      <TransactionItem
        name={item.name}
        type={item.type}
        amount={item.amount}
        index={index}
        style={style}
        image={getImage(index)}
      />
    );
  };

  return (
    <View style={styles.full}>
      <View style={[styles.transactionHeader, style]}>
        <TextView style={styles.allTransactions}>All Transactions</TextView>
        <View style={styles.sortRow}>
          <TextView style={styles.sortBy}>Sort by:</TextView>
          <Button style={styles.recentContainer}>
            <TextView style={styles.recent}>Recent</TextView>
            <DownIcon />
          </Button>
        </View>
      </View>
      <FlatList
        data={mockData}
        keyExtractor={(it) => it.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MyTransaction;
