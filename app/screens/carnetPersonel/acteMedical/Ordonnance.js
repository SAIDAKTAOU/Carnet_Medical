import React, { useState } from 'react';
import { StyleSheet, View ,Keyboard,TouchableWithoutFeedback, Text, FlatList,Modal, TouchableOpacity} from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

import { globalStyles } from '../../../styles/global';
import Card from '../../../shared/card';
import AddOrdonnance from '././addOrdonnance';



export default function Ordonnance({ navigation }){
    const[ordonnance, setOrdonnance] = useState([
        {name:'ahmad baggi',specialite:'Tetouan, touta',date:'05/03/04',prix:'250dh',image:'image.jpg', key:'1'},
        {name:'racha afham',specialite:'tanger', date:'05/03/04', prix:'250dh',image:'image.jpg',key:'2'},
    ])

    const addOrdonnance =(ordonnance)=>{
        ordonnance.key = Math.random().toString();
        setOrdonnance((currentOrdonnance)=>{
            return [ordonnance, ...currentOrdonnance]
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
                <AddOrdonnance addOrdonnance={addOrdonnance} />
            </View>
            </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons name="add-box" size={28} color="#9159b8"  onPress={() => setModalOpen(true)} style={styles.modalToggle} />
{/*     <MaterialIcons name='add' size={28} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
      */}     
             <DataTable style={styles.datatable}>
        <DataTable.Header>
          <DataTable.Title>Nom </DataTable.Title>
          <DataTable.Title >Date</DataTable.Title>
          <DataTable.Title>prix</DataTable.Title>
        </DataTable.Header>
            <FlatList
              data={ordonnance}
              renderItem={({ item }) => (
                <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell >{item.date}</DataTable.Cell>
                    <DataTable.Cell>{item.prix}</DataTable.Cell>
                </DataTable.Row>
                
                
                )}
            />
</DataTable>

<TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={styles.iconBack} name="ios-arrow-back" size={28} color="#9159b8" />
            </TouchableOpacity>
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
    }, 
    iconBack:{
        paddingTop:380,
        paddingLeft:30
    }
  })

/*


                <TouchableOpacity onPress={ () => navigation.navigate('OrdonnanceReview', item)}>
                  
                  <View style={styles.container}>
                  <MaterialCommunityIcons style={styles.icon} name="gesture-tap" size={24} color="black" />
                   <Text style={styles.display}>{item.name}</Text>
                  </View>
                 
                 </TouchableOpacity>
                 
*/
