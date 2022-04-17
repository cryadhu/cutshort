import React from "react";
import { View } from "react-native";
import Svg from "../../../assets/svg/amount.svg";
import TextView from "../../components/TextView";
import styles from "./styles";

const AmountIcon = Svg;

const HomeContainer = () => {
  return (
    <View style={styles.root}>
      <TextView style={styles.balanceHeader}>Your current balance is</TextView>
      <AmountIcon />
    </View>
  );
};

export default HomeContainer;
