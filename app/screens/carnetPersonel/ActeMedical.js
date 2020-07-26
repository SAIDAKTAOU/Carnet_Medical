import React from 'react';
import { View,StyleSheet,ScrollView, Text,TouchableOpacity,Image, Button} from 'react-native';
import { Card } from 'react-native-paper';

import FlatButton from '../../shared/button';

export default function ActeMedical({ navigation }){
    return (

        <View style={styles.container}>
        <ScrollView>
        
         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/aaaa.png')} />
        
         <FlatButton  text="Consultation" onPress={() => navigation.navigate('Consultation')} />
       
         </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/ordo.jpg')} />
    
         <FlatButton  text="Ordonnance" onPress={() => navigation.navigate('Ordonnance')} />
         
         </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/controle.jpg')} />
       
         <FlatButton  text="Controle" onPress={() => navigation.navigate('Controle')} />
        
         </Card>

         <Card style={styles.card}>
         <Card.Content>
         </Card.Content>
         <Card.Cover style={styles.image} source={require('../../images/bilan.jpeg')} />
         
         <FlatButton  text="Bilan Analyse" onPress={() => navigation.navigate('Bilan Analyse')} />
       
         </Card>

         </ScrollView>

          {/*
                <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Consultation')}>
                <Image style={styles.image} source={require('../../images/consultation.jpg')} /> 
                <Text style={styles.text}>Consultation</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Controle')}>
                <Image style={styles.image} source={require('../../images/controle.png')} />
                <Text style={styles.text}>Controle</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Ordonnance')}>
                <Image style={styles.image} source={require('../../images/ordonnance.png')} /> 
                <Text style={styles.text}>Ordonnance</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Bilan Analyse')}>
                <Image style={styles.image} source={require('../../images/bilan.jpeg')} />
                <Text style={styles.text}>Bilan d'analyse</Text>
                </TouchableOpacity>
               </View>
            */}
            {/**
            <View>
            <FlatButton  text="Consultation" onPress={() => navigation.navigate('Consultation')} />
            <FlatButton  text="Controle" onPress={() => navigation.navigate('Controle')} />
            <FlatButton  text="Ordonnance" onPress={() => navigation.navigate('Ordonnance')} />
            <FlatButton  text="Bilan Analyse" onPress={() => navigation.navigate('Bilan Analyse')} />
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
          height:250
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