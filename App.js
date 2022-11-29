// import 'react-native-gesture-handler';
import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import Home from "./screens/home";
// import About from "./screens/about";
import Details from "./screens/details";
import HomeStack from "./routes/homeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
// import MyDrawer from "./routes/drawer";
// import React from "react";


const Stack = createNativeStackNavigator();
export default function App(){
  return (
    // <NavigationContainer>
      <HomeStack />
    /* </NavigationContainer> */
  );
  
  
}