import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from '../views/Questions/Question';
import RotasDrawer from './RotasDrawer';

const Stack = createNativeStackNavigator();

const RotasStack = () => {
    return (
            <Stack.Navigator initialRouteName="Question"> 
                <Stack.Screen
                    name="Question"
                    component={Question}
                    options={ { headerShown: false } }
                />
                <Stack.Screen
                    name="Inicial"
                    component={RotasDrawer}
                    options={ { headerShown: false } }
                />
            </Stack.Navigator>
    );
}
export default RotasStack;