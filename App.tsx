import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RootNavigation from "./src/navigation/RootNavigation";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const resourcesLoaded = useCachedResources();

  if (!resourcesLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
