import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OverView from "../screens/OverView";
import Home from "../screens/Home";
import { NAVIGATION } from "./helper";
import NewRequest from "../screens/NewRequest";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATION.OVERVIEW}
          component={OverView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NAVIGATION.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NAVIGATION.NEW_REQUEST}
          component={NewRequest}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
