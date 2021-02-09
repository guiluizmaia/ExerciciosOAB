import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perguntas from './Perguntas';
import Home from './Home';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Perguntas" component={Perguntas} initialParams = { { ofens: 0 } }/>
        </Stack.Navigator>
    )
}