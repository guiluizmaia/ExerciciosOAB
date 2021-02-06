import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perguntas from './Perguntas';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
        initialRouteName="Perguntas"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Perguntas" component={Perguntas} initialParams = { { ofens: 0 } }/>
        </Stack.Navigator>
    )
}