import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, Theme, DefaultTheme } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {

  const theme: Theme = useMemo(() =>({ 
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f5f5f5',
      text: '#191919',
      border: '#D9D9D9',
      primary: '#191919',
    }
   }),[]);

  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
