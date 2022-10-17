/* eslint-disable */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import ImageScreen from "./screens/imageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import DetailScreen from "./screens/detailScreen";


const Stack = createNativeStackNavigator();

const App =(props)=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ title: 'My Images' }}/>
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Detail Screen' }}/>
    </Stack.Navigator>
    </NavigationContainer>
    // <ImageScreen />
  );
};

export default App




