import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RotasStack from './src/components/RotasStack';

export default function App() {
  return (
    <NavigationContainer>
            
      <StatusBar barStyle="light-content" backgroundColor="#FF8000"/>

      <RotasStack/>

    </NavigationContainer>
  );
}