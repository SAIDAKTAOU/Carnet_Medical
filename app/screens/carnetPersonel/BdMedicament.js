import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../../styles/global';

export default function BdMedicament({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Bd Medicaments Screen</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )
}