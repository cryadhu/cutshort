import React, { useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import styles from "./style";
import users from "../../mock/users.json";
import UserItem from "../../components/UserItem";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import SendMoneyUserView from "../../components/SendMoneyUserView";

const unSelectedCr = 18;
const cx = SCREEN_WIDTH / 2;
const cy = SCREEN_WIDTH / 2;
const r = SCREEN_WIDTH / 2 - 45;
const stepAngle = 8.9;
const stepAngleInner = 3.2;

const xyTheta = (a: number, b: number, theeta: number, r: number) => {
  const x = a + r * Math.cos(theeta);
  const y = b + r * Math.sin(theeta);
  return { left: x - unSelectedCr, top: y - unSelectedCr };
};

const getPosition = (index: number) => {
  if (index < 4) {
    return xyTheta(cx, cy, stepAngle * (index + 1), r);
  }
  return xyTheta(cx, cy, stepAngleInner * (index + 1), r - 45);
};

const SendMoneyContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const snapPoints = useMemo(() => ["5%", "40%"], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onSelectUser = (index: number) => {
    setSelectedIndex(index);
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.root}>
        <View style={[styles.circle, styles.outerCircle]}>
          <View style={[styles.circle, styles.innerCircle]}>
            <View style={[styles.circle, styles.innerCircle]} />
          </View>
          {users.map((user, index) => {
            const { left, top } = getPosition(index);
            return (
              <UserItem
                index={index}
                key={user.id}
                style={styles.absolute}
                name={user.name}
                left={left}
                top={top}
                selected={selectedIndex === index}
                onSelectUser={onSelectUser}
              />
            );
          })}
        </View>
        <GestureHandlerRootView style={styles.bottomContainer}>
          <BottomSheetModal
            index={1}
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            enableOverDrag={false}
            backgroundComponent={() => <View />}
            handleComponent={() => (
              <View style={styles.handle}>
                <View style={styles.handleBar} />
              </View>
            )}
          >
            <SendMoneyUserView
              user={selectedIndex > -1 ? users[selectedIndex] : {}}
            />
          </BottomSheetModal>
        </GestureHandlerRootView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default SendMoneyContainer;
