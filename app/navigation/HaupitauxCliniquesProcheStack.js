import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';

import HaupitauxCliniquesProche from '../screens/HopitauxCliniquesProches';

const Stack = createStackNavigator();

export default function HaupitauxCliniquesProcheStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Haupitaux et Cliniques proche" component={HaupitauxCliniquesProche}
      options= {({ navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title="Haupitaux,Cliniques proches" />
        }
      }} 
      />
    </Stack.Navigator>
  );
}