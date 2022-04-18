import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

import OverView from "./src/screens/OverView";
import Home from "./src/screens/Home";

export default function App() {
  const [loaded] = useFonts({
    InterRegular: require("./assets/fonts/interRegular.ttf"),
    InterBold: require("./assets/fonts/interBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
