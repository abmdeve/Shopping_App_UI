import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "@expo/vector-icons/MaterialIcons";
import HomeScreen from "../screens/HomeScreen";
import Cart from "../screens/Cart";
import Payment from "../screens/Payment";
import Profile from "../screens/Profile";

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <TabsStack.Screen
        options={{
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
        name="Cart"
        component={Cart}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
        name="Payment"
        component={Payment}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props} />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;
