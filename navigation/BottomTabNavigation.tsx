import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Search } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const screenOption = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false, // Masquer l'en-tête sur les écrans des onglets
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70
  }
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons
              name="search-sharp"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
