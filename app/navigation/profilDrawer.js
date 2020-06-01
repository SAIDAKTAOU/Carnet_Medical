import React from 'react';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import ProfilStack from './profilStack';
import FavorisStack from './favorisStack';
import CarnetPersonelStack from './carnetPersonelStack';
import ServicesUrgenceProcheStack from './ServicesUrgenceProcheStack';
import HaupitauxCliniquesProcheStack from './HaupitauxCliniquesProcheStack';
import LaboAnalyseProcheStack from './LaboAnalyseProcheStack';
import { logoutUser  } from '../api/auth-app';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Deconnexion" onPress={() => logoutUser()} />
    </DrawerContentScrollView>
  );
}

export default function ProfilDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
    initialRouteName="CarnetPersonel"
    >
      <Drawer.Screen name="CarnetPersonel" component={CarnetPersonelStack} />
      <Drawer.Screen name="Services d'urgences les plus Proche" component={ServicesUrgenceProcheStack} />
      <Drawer.Screen name="Haupitaux et Cliniques les plus Proche" component={HaupitauxCliniquesProcheStack} />
      <Drawer.Screen name="Laboratoires d'analyse les plus proche" component={LaboAnalyseProcheStack} />
    </Drawer.Navigator>
  );
}
