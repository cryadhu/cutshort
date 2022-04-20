import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { UserItemProps } from "../types/components/userItem";
import colors from "../utils/color";
import { getRandomImage } from "../utils/mock";
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
    alignItems: "center",
    justifyContent: "center",
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
    height: 32,
    width: 32,
    borderRadius: 36,
  },
  selectedImage: {
    height: 64,
    width: 64,
  },
});

const UserItem = (props: UserItemProps) => {
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
          <Image
            style={[styles.image, selected && styles.selectedImage]}
            source={getRandomImage(index)}
          />
        </View>
        <TextView style={[styles.name, selected && styles.selectedName]}>
          {name}
        </TextView>
      </Button>
    </>
  );
};

export default UserItem;
