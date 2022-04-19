import React, { useEffect, useMemo, useRef } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import Svg from "../../../assets/svg";
import Button from "../../components/Button";
import MyTransaction from "../../components/MyTransaction";
import TextView from "../../components/TextView";
import styles from "./styles";
import { HomeContainerProps } from "../../types/containers/homeContainer";
import colors from "../../utils/color";

const HomeContainer = (props: HomeContainerProps) => {
  const { requestMoney, sendMoney } = props;
  const snapPoints = useMemo(() => ["5%", "50%"], []);
  const insets = useSafeAreaInsets();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.root}>
        <View
          style={[
            styles.header,
            {
              marginTop: insets.top,
            },
          ]}
        >
          <Button>
            <Svg.menu />
          </Button>
          <TextView style={styles.name}>Hello Sandra,</TextView>
          <Button
            style={styles.addMoney}
            title="Add money"
            titleStyle={styles.addMoneyTitle}
          />
        </View>
        <TextView style={styles.balanceHeader}>
          Your current balance is
        </TextView>
        <View style={styles.amountContainer}>
          <Svg.currency fill={colors.lightWhite} />
          <TextView style={styles.amount}>200,000</TextView>
        </View>
        <View style={styles.moneyButtonContainer}>
          <Button
            title="Request money"
            style={[styles.moneyButton, styles.requestButton]}
            titleStyle={styles.moneyTitle}
            onPress={requestMoney}
          />
          <Button
            title="Send money"
            style={styles.moneyButton}
            titleStyle={styles.moneyTitle}
            onPress={sendMoney}
          />
        </View>
        <GestureHandlerRootView style={styles.bottomContainer}>
          <BottomSheetModal
            index={1}
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            enableDismissOnClose={false}
            enablePanDownToClose={false}
            enableOverDrag={false}
            backgroundComponent={() => <View />}
            handleComponent={() => (
              <View style={styles.handle}>
                <View style={styles.handleBar} />
              </View>
            )}
          >
            <MyTransaction style={styles.transactions} />
          </BottomSheetModal>
        </GestureHandlerRootView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default HomeContainer;
