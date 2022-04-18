import React from "react";
import { View } from "react-native";

import Svg from "../../../assets/svg";
import Button from "../../components/Button";
import MyTransaction from "../../components/MyTransaction";
import TextView from "../../components/TextView";
import TransactionItem from "../../components/TransactionItem";
import { TRANSACTION_TYPE } from "../../utils/transactions";
import styles from "./styles";

const AmountIcon = Svg.amount;
const MenuIcon = Svg.menu;

const HomeContainer = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Button>
          <MenuIcon />
        </Button>
        <TextView style={styles.name}>Hello Sandra,</TextView>
        <Button
          style={styles.addMoney}
          title="Add money"
          titleStyle={styles.addMoneyTitle}
        />
      </View>
      <TextView style={styles.balanceHeader}>Your current balance is</TextView>
      <AmountIcon style={styles.amount} />
      <View style={styles.moneyButtonContainer}>
        <Button
          title="Request money"
          style={[styles.moneyButton, styles.requestButton]}
          titleStyle={styles.moneyTitle}
        />
        <Button
          title="Send money"
          style={styles.moneyButton}
          titleStyle={styles.moneyTitle}
        />
      </View>
      <MyTransaction style={styles.transactions}/>
    </View>
  );
};

export default HomeContainer;
