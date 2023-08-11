import { View, Text } from 'react-native';
import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';
import { ROUTES } from '../config/routes';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen'

export type RootStackParamList = {
    TabsStack : NavigatorScreenParams<TabsStackParamList>;
    Details: undefined;
}

const RootStack= createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen
        options={{
            headerShown: false,
        }}
        name="TabsStack"
        component={TabsNavigator}
        />
        <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator