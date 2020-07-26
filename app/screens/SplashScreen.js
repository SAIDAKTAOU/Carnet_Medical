import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function SplashComponent({ navigation }){
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
        <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode={"stretch"}
        />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Rester connecter avec nous</Text>
        <Text style={styles.text}> Se connecter avec un compte</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=> navigation.navigate('login')}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#ff6666', '#ff6666']}
          style={styles.signIn}>
              <Text style={styles.textSignIn}>Se connecter</Text>
              <MaterialIcons name="navigate-next" size={20} color="black" />
          </LinearGradient>
        </TouchableOpacity>
        
        </View>
        </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#ff8080'
   },
   header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
   },
   footer:{
       flex:1,
       backgroundColor:'white',
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
       paddingVertical:50,
       paddingHorizontal:30
   },
   logo:{
    width:height_logo,
    height:height_logo,
    borderRadius:600,
    width:380,
    height:380
   },
   title:{
       color:'#ff6666',
       fontWeight:'bold',
       fontSize:30
    },
    text:{
    color:'gray',
    marginTop:5

    }, 
    button:{
        
        alignItems:"flex-end",
        marginTop:30
    },
    signIn:{
     width:150,
     height:40,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:50,
     flexDirection:'row'
    },
    textSignIn:{
        color:'black',
        fontWeight:'bold'
    }
})