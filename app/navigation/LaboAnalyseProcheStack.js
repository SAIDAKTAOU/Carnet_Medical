import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';

import LaboAnalyseProche from '../screens/LaboAnalysesProches';

const Stack = createStackNavigator();

export default function ActeMedicalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Laboratoire d'analyses proche" component={LaboAnalyseProche}
      options= {({ navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title="Laboratoire Analyses proche" />
        }
      }} 
      />
      
    </Stack.Navigator>
  );
}