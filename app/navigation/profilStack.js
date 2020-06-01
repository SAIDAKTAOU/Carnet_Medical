import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfilEtendu from '../screens/profilEtendu/profil';
import AntecedansMedicaux from '../screens/profilEtendu/antecedansMedicaux';
import AntecedansFamiliaux from '../screens/profilEtendu/antecedansFamiliaux';
import HabitudeAlcool from '../screens/profilEtendu/HabitudesAlcool';
import Chirurgie from '../screens/profilEtendu/chirurgie';
import ChirurgieReview from '../screens/profilEtendu/ChirurgieReview';
import HabitudeAlcoolReview from '../screens/profilEtendu/HabitudeAlcoolReview';

import Header from '../shared/header';

const Stack = createStackNavigator();

export default function ProfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="profil Etendu" component={ProfilEtendu}/>
      <Stack.Screen name="AntecedansMedicaux" component={AntecedansMedicaux} options={{
        headerTitle: 'Antecedans Medicaux'
      }} />
      <Stack.Screen name="AntecedansFamiliaux" component={AntecedansFamiliaux} options={{
        headerTitle: 'Antecedans Familiaux'
      }} />
      <Stack.Screen name="HabitudeAlcool" component={HabitudeAlcool} options={{
        headerTitle: 'Habitude Alcoolo-tabagique'
      }}  />
      <Stack.Screen name="HabitudeAlcoolReview" component={HabitudeAlcoolReview} options={{
        headerTitle: 'HabitudeAlcool Details'
      }} />
      <Stack.Screen name="Chirurgie" component={Chirurgie}  />
      <Stack.Screen name="ChirurgieReview" component={ChirurgieReview} options={{
        headerTitle: 'Chirurgie Details'
      }} />
      
    </Stack.Navigator>
  );
}