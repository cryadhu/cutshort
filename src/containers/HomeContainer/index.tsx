import React, { useMemo } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Svg from "../../../assets/svg";
import Button from "../../components/Button";
import MyTransaction from "../../components/MyTransaction";
import TextView from "../../components/TextView";
import styles from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AmountIcon = Svg.amount;
const MenuIcon = Svg.menu;

const HomeContainer = () => {
  const snapPoints = useMemo(() => ["8%", "90%"], []);

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
      <GestureHandlerRootView style={styles.full}>
        <BottomSheet
          index={1}
          snapPoints={snapPoints}
          backgroundComponent={() => <View />}
          handleComponent={() => (
            <View style={styles.handle}>
              <View style={styles.handleBar} />
            </View>
          )}
        >
          <MyTransaction style={styles.transactions} />
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

export default HomeContainer;
