import React, { useRef } from "react";

import NewRequestContainer from "../../containers/NewRequestContainer";
import { Animated, View } from "react-native";
import ToolBar from "../../components/ToolBar";
import styles from "./styles";

const SCROLL_RANGE = [0, 100];

const NewRequest = () => {
  const scrollVal = useRef(new Animated.Value(0)).current;

  const backgroundColor = scrollVal.interpolate({
    inputRange: SCROLL_RANGE,
    outputRange: ["rgba(3, 14, 74, 0))", 'rgba(3, 14, 74, 1))'],
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollVal } } }],
    {
      useNativeDriver: false,
    }
  );

  return (
    <View style={styles.root}>
      <ToolBar
        back
        title="New Request"
        animated
        style={[
          styles.toolbar,
          {
            backgroundColor,
          },
        ]}
      />
      <NewRequestContainer onScroll={onScroll} />
    </View>
  );
};

export default NewRequest;
