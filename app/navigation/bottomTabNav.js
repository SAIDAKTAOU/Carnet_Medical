import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import FavorisStack from './favorisStack';
import Profil from '../screens/profil';
import ProfilDrawer from './profilDrawer';
import ProfilStack from './profilStack';

const Tab = createBottomTabNavigator();
//#6bc1db

export default function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="ProfilDrawer"
      tabBarOptions={{
        activeTintColor: '#ff6666',
      }} 
    >
      <Tab.Screen
        name="ProfilDrawer"
        component={ProfilDrawer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilStack}
        options={{
          tabBarLabel: 'Profil étendu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Favoris"
        component={FavorisStack}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
