import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens

import SplashScreen from "../screens/SplashScreen"; 

import CarnetPersonel from '../screens/carnetPersonel/carnetPersonel';
import BdMedicament from '../screens/carnetPersonel/BdMedicament';
import RendezVous from '../screens/carnetPersonel/RendezVous';
import ActeMedicalStack from '../navigation/acteMedicalStack';
import RendezVousReview from '../screens/carnetPersonel/RendezVousReview';
import ServicesUrgenceProche from '../screens/ServicesUrgenceProche';
import HaupitauxCliniquesProche from '../screens/HopitauxCliniquesProches';
import LaboAnalyseProche from '../screens/LaboAnalysesProches';

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HaupitauxCliniquesProcheStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Haupitaux et Cliniques proche"
        component={HaupitauxCliniquesProche}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Haupitaux,Cliniques proches" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function LaboAnalyseProcheStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Laboratoire d'analyses proche"
        component={LaboAnalyseProche}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Laboratoire Analyses proche" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function ServicesUrgenceProcheStack(props) {
  return (
    <Stack.Navigator initialRouteName="ServicesUrgenceProcheStack" mode="card" headerMode="screen">
      <Stack.Screen
        name="ServicesUrgenceProche"
        component={ServicesUrgenceProche}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Urgences les plus proche"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function CarnetPersonelStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Carnet Personel"
        component={CarnetPersonel}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Carnet Personel"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Rendez Vous"
        component={RendezVous}
      />
       <Stack.Screen
        name="RendezVousReview"
        component={RendezVousReview}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="RendezVous Details"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
       <Stack.Screen
        name="Acte Medical"
        component={ActeMedicalStack}
      />
       <Stack.Screen
        name="Bd Medicament"
        component={BdMedicament}
      />
      
    </Stack.Navigator>
  );
}
 

export default function ProfilDrawer(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Carnet Personel"
    >
      <Drawer.Screen name="Carnet Personel" component={CarnetPersonelStack} />
      <Drawer.Screen name="Services d'urgences les plus Proche" component={ServicesUrgenceProcheStack} />
      <Drawer.Screen name="Haupitaux et Cliniques les plus Proche" component={HaupitauxCliniquesProcheStack} />
      <Drawer.Screen name="Laboratoires d'analyse les plus proche" component={LaboAnalyseProcheStack} />
      <Drawer.Screen name="Deconnexion" component={SplashScreen} />
    </Drawer.Navigator>
  );
}

