import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ActeMedical from '../screens/carnetPersonel/ActeMedical';
import BilanAnalyse from '../screens/carnetPersonel/acteMedical/BilanAnalyse';
import Consultation from '../screens/carnetPersonel/acteMedical/Consultation';
import Controle from '../screens/carnetPersonel/acteMedical/Controle';
import Ordonnance from '../screens/carnetPersonel/acteMedical/Ordonnance';
import ConsultationReview from '../screens/carnetPersonel/acteMedical/ConsultationReview';
import ControleReview from '../screens/carnetPersonel/acteMedical/ControleReview';
import OrdonnanceReview from '../screens/carnetPersonel/acteMedical/OrdonnanceReview';
import BilanAnalyseReview from '../screens/carnetPersonel/acteMedical/BilanAnalyseReview';


const Stack = createStackNavigator();

export default function ActeMedicalStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }} >
      <Stack.Screen name="Acte Medical" component={ActeMedical} />
      <Stack.Screen name="Consultation" component={Consultation} options={{
        headerTitle: 'Consultation'
      }} />
      <Stack.Screen name="ConsultationReview" component={ConsultationReview} options={{
        headerTitle: 'Consultation Details'
      }} />
      <Stack.Screen name="Controle" component={Controle} />
      <Stack.Screen name="ControleReview" component={ControleReview} options={{
        headerTitle: 'Controle Details'
      }} />
      
      <Stack.Screen name="Ordonnance" component={Ordonnance} />
      <Stack.Screen name="OrdonnanceReview" component={OrdonnanceReview} options={{
        headerTitle: 'Ordonnance Details'
      }} />
      <Stack.Screen name="Bilan Analyse" component={BilanAnalyse} />
      <Stack.Screen name="BilanAnalyseReview" component={BilanAnalyseReview} options={{
        headerTitle: 'Bilan Analyse Details'
      }} />
    </Stack.Navigator>
  );
}