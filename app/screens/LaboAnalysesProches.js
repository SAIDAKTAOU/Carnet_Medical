import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../styles/global';

export default function LaboAnalyseProche({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Laboratoires d'analyses les plus proche Screen</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )
}