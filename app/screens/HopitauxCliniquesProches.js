import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../styles/global';

export default function HaupitauxCliniquesProche({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Haupitaux et cliniques les plus proche Screen</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )
}