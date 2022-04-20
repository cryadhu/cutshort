import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  SendMoneyUserViewProps,
  UserProp,
} from "../types/components/sendMoneyUser";
import colors from "../utils/color";
import { getRandomImage } from "../utils/mock";
import Button from "./Button";
import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#10194E",
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: colors.white,
  },
  name: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "InterBold",
    marginTop: 16,
  },
  phone: {
    color: colors.white,
    fontSize: 14,
    marginTop: 16,
  },
  sendTitle: {
    color: colors.white,
  },
  button: {
    marginTop: 32,
    backgroundColor: "#FF2E63",
    minWidth: 147,
  },
});

const SendMoneyUserView = (props: SendMoneyUserViewProps) => {
  const { user, index } = props;

  return (
    <View style={styles.root}>
      <Image source={getRandomImage(index)} style={styles.image} />
      <TextView style={styles.name}>{user?.name}</TextView>
      <TextView style={styles.phone}>{user?.phone}</TextView>
      <Button
        title="Continue"
        style={styles.button}
        titleStyle={styles.sendTitle}
      />
    </View>
  );
};

export default SendMoneyUserView;
