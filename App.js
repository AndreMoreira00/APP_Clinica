import React from "react";
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Paciente from "./src/screens/Paciente";
import Clinica from "./src/screens/Clinica";

export default function App(props){
  const [ fontCarregada ] = useFonts({
    "Roboto": require("./assets/Roboto-Black.ttf")
  })
  const Stack = createNativeStackNavigator()
  if (fontCarregada)
    return <NavigationContainer>
      <Stack.Navigator initialRouteName="Clinica" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Clinica" component={Clinica}/>
        <Stack.Screen name="Paciente" component={Paciente}/>
      </Stack.Navigator>
    </NavigationContainer>
  
}