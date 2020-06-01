import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../styles/global';

export default function Deconnexion({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Deconnexion</Text>
            <Button  title="deconnexion" onPress={() => navigation.navigate('profil Etendu')} /> 
        </View>
    )
}