import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Animated, StyleSheet, View } from "react-native";
import Svg from "../../assets/svg";
import Button from "./Button";
import TextView from "./TextView";
import { ToolBarProps } from "../types/components/toolbar";

const styles = StyleSheet.create({
  root: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 16,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    color: "#D7C9C9",
    marginLeft: 4,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 18,
    color: "#D7C9C9",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
});

const ToolBar = (props: ToolBarProps) => {
  const { back, title, style, animated } = props;
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const BackIcon = () => {
    return (
      <Button style={styles.backContainer} onPress={goBack}>
        <Svg.back />
        <TextView style={styles.back}>Back</TextView>
      </Button>
    );
  };

  const WrapperView = animated ? Animated.View : View;
  return (
    <WrapperView style={[styles.root, style]}>
      {back && <BackIcon />}
      {title && <TextView style={styles.title}>{title}</TextView>}
    </WrapperView>
  );
};

ToolBar.defaultProps = {
  back: false,
};

export default ToolBar;
