import React from "react";
import { StyleSheet, View } from "react-native";

import { IndicatorProps } from "../types/components/indicator";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignSelf: "baseline",
  },
  item: {
    height: 8,
    width: 16,
    backgroundColor: "#FDD590",
    borderRadius: 4,
    marginRight: 4,
  },
  selected: {
    backgroundColor: "#FFB129",
    width: 32,
  },
});

const Indicator = (props: IndicatorProps) => {
  const { length, currentItem, style } = props;

  const items = [];
  for (let i = 0; i < length; ) {
    items.push(
      <View
        style={[styles.item, i === currentItem && styles.selected]}
        key={`${i}`}
      />
    );
    i++;
  }
  return <View style={[styles.root, style]}>{items}</View>;
};

Indicator.defaultProps = {
  length: 0,
};

export default Indicator;
