import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';

import CarnetPersonel from '../screens/carnetPersonel/carnetPersonel';
import BdMedicament from '../screens/carnetPersonel/BdMedicament';
import RendezVous from '../screens/carnetPersonel/RendezVous';
import ActeMedicalStack from '../navigation/acteMedicalStack';
import RendezVousReview from '../screens/carnetPersonel/RendezVousReview';

const Stack = createStackNavigator();

export default function CarnetPersonelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carnet Personel" component={CarnetPersonel}
      options= {({ navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title='Carnet Personel' />
        }
      }} 
      />

      <Stack.Screen name="Rendez Vous" component={RendezVous} />
      <Stack.Screen name="RendezVousReview" component={RendezVousReview} options={{
        headerTitle: 'RendezVous Details'
      }} />
      <Stack.Screen name="Acte Medical" component={ActeMedicalStack} />

      <Stack.Screen name="Bd Medicament" component={BdMedicament} />
      
    </Stack.Navigator>
  );
}