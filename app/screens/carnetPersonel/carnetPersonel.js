import React from 'react';
import { View,StyleSheet,ScrollView, Text,TouchableOpacity,Image, Button} from 'react-native';
import { Card } from 'react-native-paper';

import FlatButton from '../../shared/button';

export default function CarnetPersonnel({ navigation }){
    return (

        <View style={styles.container}>
         
         <ScrollView>

        <Card style={styles.card}>
        <Card.Cover style={styles.image} style={styles.image} source={require('../../images/r.png')} />
       
        <FlatButton  text="Rendez Vous" onPress={() => navigation.navigate('Rendez Vous')} />
        
        </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/acte.jpg')} />
       
        <FlatButton  text="Acte Medical" onPress={() => navigation.navigate('Acte Medical')} />
        
        </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/icon-cro-32.jpg')} />
       
        <FlatButton  text="Bd Medicament" onPress={() => navigation.navigate('Bd Medicament')} />
     
        </Card>


       </ScrollView>
        
        {/* 
              <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Declaration Mutuelle')}>
                <Image style={styles.image} source={require('../../images/declaration.jpeg')} /> 
                <Text style={styles.text}>Declaration Mutuelle</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Rendez Vous')}>
                <Image style={styles.image} source={require('../../images/rendezvous.png')} />
                <Text style={styles.text}>Rendez Vous</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Acte Medical')}>
                <Image style={styles.image} source={require('../../images/acte.jpg')} /> 
                <Text style={styles.text}>Acte Medical</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Pharmacie')}>
                <Image style={styles.image} source={require('../../images/pharmacie2.jpg')} />
                <Text style={styles.text}>Pharmacies</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Rapport Depense')}>
                <Image style={styles.image} source={require('../../images/depense.jpg')} /> 
                <Text style={styles.text}>Rapport Depense</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Bd Medicament')}>
                <Image style={styles.image} source={require('../../images/medicament.jpg')} />
                <Text style={styles.text}>Bd Medicaments</Text>
                </TouchableOpacity>
               </View>
           */}    
            {/**
             <View>
            <FlatButton  text="Declaration Mutuelle" onPress={() => navigation.navigate('Declaration Mutuelle')} />
            <FlatButton  text="Rendez Vous" onPress={() => navigation.navigate('Rendez Vous')} />
            <FlatButton  text="Acte Medical" onPress={() => navigation.navigate('Acte Medical')} />
            <FlatButton  text="Pharmacie" onPress={() => navigation.navigate('Pharmacie')} />
            <FlatButton  text="Rapport Depense" onPress={() => navigation.navigate('Rapport Depense')} />
            <FlatButton  text="Bd Medicament" onPress={() => navigation.navigate('Bd Medicament')} />
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