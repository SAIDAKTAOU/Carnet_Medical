import React, { useState } from 'react';
import { StyleSheet, View ,Keyboard,TouchableWithoutFeedback, Text, FlatList,Modal, TouchableOpacity} from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import AddChirurgie from './addChirurgie';

export default function Chirurgie({ navigation }){
    const[chirurgie, setChirurgie] = useState([
        {name:'Amygdales', docteur:'abaraham zaki',date:'02/07/2019',bien:'oui', key:'1'},
        {name:'la goutte et le pied', docteur:'fatiha daoudi',date:'05/01/2018',bien:'oui',key:'2'},
    ])

    const addChirurgie =(chirurgie)=>{
        chirurgie.key = Math.random().toString();
        setChirurgie((currentChirurgie)=>{
            return [chirurgie, ...currentGhirurgie]
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
            <Text style={styles.text1}>Entrer les information</Text>
                <AddChirurgie addChirurgie={addChirurgie} />
            </View>
            </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons name="add-box" size={28} color="black"  onPress={() => setModalOpen(true)} style={styles.modalToggle} />
{/*     <MaterialIcons name='add' size={28} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
      */}     
        <DataTable style={styles.datatable}>
        <DataTable.Header>
        <DataTable.Title>Nom </DataTable.Title>
          <DataTable.Title >Docteur</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>
            
            <FlatList
              data={chirurgie}
              renderItem={({ item }) => (
                <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell >{item.docteur}</DataTable.Cell>
                <DataTable.Cell >{item.date}</DataTable.Cell>
                <DataTable.Cell >{item.bien}</DataTable.Cell>
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