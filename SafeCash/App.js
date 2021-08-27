import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Question1 from './src/views/Questions/Question1';

export default function App() {
  return (
    <View>
      <Question1 />
      <StatusBar style="auto" backgroundColor="#FF781F"/>
    </View>
  );
}