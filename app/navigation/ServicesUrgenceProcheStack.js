import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';

import ServicesUrgenceProche from '../screens/ServicesUrgenceProche';

const Stack = createStackNavigator();

export default function ServicesUrgenceProcheStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ServicesUrgenceProche" component={ServicesUrgenceProche}
      options= {({ navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title="Urgences les plus proche" />
        }
      }} 
      />
      
    </Stack.Navigator>
  );
}