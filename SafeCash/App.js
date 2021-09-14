import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Question1 from './src/views/Questions/Question1';
import Question2 from './src/views/Questions/Question2';
import Question3 from './src/views/Questions/Question3';
import Inicial from './src/views/Inicial/Inicial';
import Sobre from './src/views/Sobre/Sobre';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function rotasDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Sobre">
      <Drawer.Screen
          name="Inicial"
          component={Inicial}
          options={
            { headerStyle: { backgroundColor: '#151515'},
              headerTintColor: 'gainsboro',
              title: 'Home'
            }
          }
      />
      <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={
            { headerStyle: { backgroundColor: '#151515'},
              headerTintColor: 'gainsboro'
            }
          }
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FF8000" />
      <Stack.Navigator initialRouteName="Inicial"> 
        <Stack.Screen
            name="Question1"
            component={Question1}
            options={ { headerShown: false } }
        />
        <Stack.Screen
            name="Question2"
            component={Question2}
            options={ { headerShown: false } }
        />
        <Stack.Screen
            name="Question3"
            component={Question3}
            options={ { headerShown: false } }
        />
        <Stack.Screen
            name="Inicial"
            component={rotasDrawer}
            options={ { headerShown: false } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}