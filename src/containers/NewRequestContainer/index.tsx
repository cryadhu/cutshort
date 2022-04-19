import React from "react";
import { Image, ScrollView, View } from "react-native";

import Images from "../../../assets/images";
import Svg from "../../../assets/svg";
import Button from "../../components/Button";
import TextView from "../../components/TextView";
import { NewRequestContainerProps } from "../../types/containers/newRequestContainer";
import colors from "../../utils/color";
import { DEVICE_WIDTH, NEW_REQUEST_BG_RATIO } from "../../utils/constants";

import styles from "./styles";

const NewRequestContainer = (props: NewRequestContainerProps) => {
  const { onScroll } = props;
  return (
    <ScrollView onScroll={onScroll}>
      <View style={styles.root}>
        <Svg.requestBg
          width={DEVICE_WIDTH}
          height={DEVICE_WIDTH / NEW_REQUEST_BG_RATIO}
          style={styles.requestBg}
        />
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Image source={Images.sendProf} style={styles.sendProf} />
          </View>
        </View>
        <TextView style={styles.name}>Adeleke Ramon</TextView>
        <TextView style={styles.requesting}>is requesting for:</TextView>
        <View style={styles.amountContainer}>
          <Svg.currency fill={colors.lightWhite} />
          <TextView style={styles.amount}>200,000</TextView>
        </View>
        <Button
          title="Send money"
          style={[styles.button, styles.send]}
          titleStyle={styles.sendTitle}
        />
        <Button
          title="Don’t send"
          style={[styles.button, styles.dontSend]}
          titleStyle={styles.donSendTitle}
        />
      </View>
    </ScrollView>
  );
};

export default NewRequestContainer;
