import React from 'react';
import { View,StyleSheet,ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';

import FlatButton from '../../shared/button';


export default function Profil({ navigation }){
    return (
        <View style={styles.container}>
        <ScrollView>
        
         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover styles={styles.image} source={require('../../images/free-medicine-doctor-tools-vector.jpg')} />
        <FlatButton  text="Antecedans Medicaux" onPress={() => navigation.navigate('AntecedansMedicaux')} />
        </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/ann.png')} />
        <FlatButton  text="Antecedans Familiaux" onPress={() => navigation.navigate('AntecedansFamiliaux')} />
        </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/alc.jpg')} />
        <FlatButton  text="Habitude Alcool" onPress={() => navigation.navigate('HabitudeAlcool')} />
         </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/chir.jpg')} />
       
         <FlatButton text="Chirurgie" onPress={() => navigation.navigate('Chirurgie')} />
        
         </Card>


        </ScrollView>
        {/**
               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('AntecedansMedicaux')}>
                <Image style={styles.image} source={require('../../images/image4.jpg')} /> 
                <Text style={styles.text}>Antecedans Medicaux</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('AntecedansFamiliaux')}>
                <Image style={styles.image} source={require('../../images/ant.jpeg')} />
                <Text style={styles.text}>Antecedans Familiaux</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('HabitudeAlcool')}>
                <Image style={styles.image} source={require('../../images/alco.jpg')} /> 
                <Text style={styles.text}>Habitude Alcool</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Chirurgie')}>
                <Image style={styles.image} source={require('../../images/image5.jpg')} />
                <Text style={styles.text}>Chirurgie</Text>
                </TouchableOpacity>
               </View>

               */}
               {/**
            <View>
            <FlatButton  text="Antecedans Medicaux" onPress={() => navigation.navigate('AntecedansMedicaux')} />
            <FlatButton  text="Antecedans Familiaux" onPress={() => navigation.navigate('AntecedansFamiliaux')} />
            <FlatButton  text="Habitude Alcool" onPress={() => navigation.navigate('HabitudeAlcool')} />
            <FlatButton  text="Chirurgie" onPress={() => navigation.navigate('Chirurgie')} />
            </View>
             */}
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
      paddingTop:10,
      justifyContent:"space-around",
      
    },
    image:{
        borderRadius:20,
        height:200
    }, 
    imageDirection:{
        flexDirection:'row',
        justifyContent:"space-between",
        margin:40,

    }, text:{
        textAlign:'center'
    }, 
    card:{
        padding:10,
        borderRadius:10,
        margin:10, 
    }
})