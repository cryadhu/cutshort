import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../utils/color";
import Button from "./Button";
import TextView from "./TextView";

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    height: 100,
    width: 100,
    marginLeft: -32,
  },
  selectedRoot: {
    marginLeft: -32,
    marginTop: -16,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
  },
  selectedCircle: {
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: "#1DC76B",
  },
  name: {
    color: "#FAFAFA",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },
  selectedName: {
    color: "#1DC76B",
  },
  image: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 36,
    margin: 4,
  },
});

const UserItem = (props) => {
  const { name, left, top, selected, index, style, onSelectUser } = props;
  return (
    <>
      <Button
        style={[
          styles.root,
          style,
          {
            left,
            top,
          },
          selected && styles.selectedRoot,
        ]}
        onPress={() => onSelectUser(index)}
      >
        <View style={[styles.circle, selected && styles.selectedCircle]}>
          <Image style={styles.image} source={{}} />
        </View>
        <TextView style={[styles.name, selected && styles.selectedName]}>
          {name}
        </TextView>
      </Button>
    </>
  );
};

export default UserItem;
