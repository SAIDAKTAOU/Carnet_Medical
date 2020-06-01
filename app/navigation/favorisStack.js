import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Medecins from '../screens/favoris/Medecins';
import Pharmacies from '../screens/favoris/pharmacies';
import Laboratoires from '../screens/favoris/laboratoires';
import ServiceUrgences from '../screens/favoris/servicesUrgences';
import Ambulances from '../screens/favoris/ambulances';
import Favoris from '../screens/favoris/favoris';

import Header from '../shared/header';

const Stack = createStackNavigator();

export default function FavorisStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Favoris" component={Favoris}
      />
      <Stack.Screen name="Medecins" component={Medecins} />
      <Stack.Screen name="Pharmacies" component={Pharmacies} />
      <Stack.Screen name="Laboratoires" component={Laboratoires} />
      <Stack.Screen name="ServiceUrgences" component={ServiceUrgences} />
      <Stack.Screen name="Ambulances" component={Ambulances} />
    </Stack.Navigator>
  );
}