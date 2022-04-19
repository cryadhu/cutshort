import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OverView from "../screens/OverView";
import Home from "../screens/Home";
import { NAVIGATION } from "./helper";
import NewRequest from "../screens/NewRequest";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NAVIGATION.OVERVIEW}
          component={OverView}
        />
        <Stack.Screen
          name={NAVIGATION.HOME}
          component={Home}
        />
        <Stack.Screen
          name={NAVIGATION.NEW_REQUEST}
          component={NewRequest}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
