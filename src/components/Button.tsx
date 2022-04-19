import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/components/button";

import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {
    fontFamily: "InterRegular",
    paddingVertical: 12,
    paddingHorizontal: 23,
    backgroundColor: "#ffff",
    borderRadius: 10,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    lineHeight: 30,
  },
});

const Button = (props: ButtonProps) => {
  const { title, titleStyle, style, children, onPress } = props;
  return (
    <TouchableOpacity
      style={[!children && styles.root, style]}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <>
        {children ? (
          children
        ) : (
          <TextView style={[styles.title, titleStyle]}>{title}</TextView>
        )}
      </>
    </TouchableOpacity>
  );
};

export default Button;
