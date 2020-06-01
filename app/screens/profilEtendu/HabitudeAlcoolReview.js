import React from 'react';
import { Button, View ,StyleSheet, Text, Image} from 'react-native';

import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';

export default function HabitudeAlcoolReview({route, navigation }){

    return(
        <View style={globalStyles.container}>
         <View style={styles.container}>
         <Text style={styles.display1}>Nom d'Habitude: </Text>
         <Text style={styles.display}>{ route.params.name }</Text>
         </View>

         <View style={styles.container}>
         <Text style={styles.display1}>information : </Text>
            <Text style={styles.display}>{ route.params.info }</Text>
         </View>

        

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:12,
        justifyContent:"space-around",
        flexDirection:'row',
        borderRadius:8,
        paddingHorizontal:10,
        backgroundColor:'lightgray',
        marginTop:6,
        
      },
      display:{
        flex:1,
    } ,
    display1:{
        flex:1,
        fontWeight:'bold'
    }
 })