
import React, { useState } from 'react';
import { StyleSheet, View ,Keyboard,TouchableWithoutFeedback, Text, FlatList,Modal, TouchableOpacity} from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import AddRendezVous from './addRendezVous';



export default function RendezVous({ navigation }){
    const[rendezVous, setRendezVous] = useState([
        {name:'fassi fihri',adresse:'Tetouan, touta',date:'05/03/2019', heure:'13:30min', key:'1'},
        {name:'Labbo',adresse:'tanger', date:'05/03/2019', heure:'13:30min',key:'2'},
    ])

    const addRendezVous =(rendezVous)=>{
        rendezVous.key = Math.random().toString();
        setRendezVous((currentRendezVous)=>{
            return [rendezVous, ...currentRendezVous]
        })
         setModalOpen(false)
        }
    
    const [modalOpen, setModalOpen ]= useState(false)

    return (

        <View style={styles.container1}>
            
        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
        <MaterialIcons name='close' style={{...styles.modalToggle, ...styles.modalClose}} size={28} onPress={() => setModalOpen(false)} />
            <AddRendezVous addRendezVous={addRendezVous} />
        </View>
        </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons name="add-box" size={28} color="#9159b8"  onPress={() => setModalOpen(true)} style={styles.modalToggle} />

        <DataTable style={styles.datatable}>
        <DataTable.Header>
          <DataTable.Title>Nom </DataTable.Title>
          <DataTable.Title >Date</DataTable.Title>
          <DataTable.Title>Heure</DataTable.Title>
        </DataTable.Header>
        
        <FlatList
              data={rendezVous}
              renderItem={({ item }) => (
                  
          <DataTable.Row>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell >{item.date}</DataTable.Cell>
              <DataTable.Cell>{item.heure}</DataTable.Cell>
          </DataTable.Row>
                )}
            />

      </DataTable>
    </View>
              
    )
}


const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:15,
        borderRadius:10,
        alignSelf:'center',
        marginTop:26,
    }, 
    container1:{
        justifyContent:"space-around",
      },
    modalClose:{
        marginTop:20,
        marginBottom:0
    },
    modalContent:{
        flex:1,
    },
    container:{
        padding:18,
        borderRadius:8,
        paddingHorizontal:10,
        backgroundColor:'lightgray',
        marginTop:6,
        justifyContent:"center", 
        flexDirection:'row'
      },
      display:{
        flex:1,
        fontWeight:'bold',
        textAlign:'center',
    } ,
    icon:{
        position:'absolute',
        right:50,
        top:15,
    },
    text1: {
        color:'purple',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        marginLeft:10,
        marginTop:14,
    }
  })

