import React from 'react';
import { View,StyleSheet,ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';

import FlatButton from '../../shared/button';

export default function Favoris({ navigation }){
    return (

        <View style={styles.container}>
            <ScrollView>
        
        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover styles={styles.image} source={require('../../images/medecinn.jpg')} />
       <FlatButton  text="Medecins" onPress={() =>  navigation.navigate('Medecins')} />
        </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/pharmacie.jpg')} />
      <FlatButton  text="Pharmacies" onPress={() => navigation.navigate('Pharmacies')} />
       </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/laboratoire.jpg')} />
       <FlatButton  text="Laboratoires" onPress={() => navigation.navigate('Laboratoires')} />
       </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/urr.jpg')} />
       <FlatButton text="Service d'urgences" onPress={() => navigation.navigate('ServiceUrgences')} />
        </Card>

        <Card style={styles.card}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.image} source={require('../../images/ambulance.jpg')} />
       <FlatButton text="Ambulances" onPress={() => navigation.navigate('Ambulances')} />
      
        </Card>

        </ScrollView>

            {/** 
                <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Medecins')}>
                <Image style={styles.image} source={require('../../images/medecin.jpg')} /> 
                <Text style={styles.text}>Medecins</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Pharmacies')}>
                <Image style={styles.image} source={require('../../images/pharmacie.jpg')} />
                <Text style={styles.text}>Pharmacies</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Laboratoires')}>
                <Image style={styles.image} source={require('../../images/laboratoire.jpg')} /> 
                <Text style={styles.text}>Laboratoires</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('ServiceUrgences')}>
                <Image style={styles.image} source={require('../../images/urgence.jpg')} />
                <Text style={styles.text}>Service d'urgences</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
               <TouchableOpacity onPress={() => navigation.navigate('Ambulances')}>
                <Image style={styles.image} source={require('../../images/ambulance.jpg')} /> 
                <Text style={styles.text}>Ambulances</Text>
                </TouchableOpacity> 
               </View>
            */}
            {/*
            <View>
            <FlatButton  text="Medecins" onPress={() => navigation.navigate('Medecins')} />
            <FlatButton  text="Pharmacies" onPress={() => navigation.navigate('Pharmacies')} />
            <FlatButton  text="Laboratoires" onPress={() => navigation.navigate('Laboratoires')} />
            <FlatButton  text="Service d'Urgences" onPress={() => navigation.navigate('ServiceUrgences')} />
            <FlatButton  text="Ambulances" onPress={() => navigation.navigate('Ambulances')} />
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