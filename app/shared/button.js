import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({ text, onPress }){

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}
{/** #5f31b8
#6988cc
*/}
const styles = StyleSheet.create({
   button:{
       paddingVertical:14,
       borderRadius:10,
       paddingHorizontal:10,
       backgroundColor:'#ff6666',
       marginTop:6,
   } ,
   buttonText:{
    color:'black',
    textTransform:'uppercase',
    fontSize:14,
    textAlign:'center',
    fontWeight:'bold'
   }
})