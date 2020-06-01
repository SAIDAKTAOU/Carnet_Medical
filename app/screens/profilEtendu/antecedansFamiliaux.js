import React, {useState} from 'react';
import { View, Text, StyleSheet,Keyboard, FlatList, Modal,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import AddAntFamiliaux from './addAntFamiliaux';

export default function AntecedansFamiliaux({ navigation }){

    const[antFam, setAntFam]= useState([
        {parent: 'mere' ,maladie:'asthme' , key:'1'},
        {parent: 'pere' ,maladie:'probleme intestinaux' , key:'2'},
        {parent: 'frere' ,maladie:'' , key:'3'},
    ])

    const addAntFam =(antFam)=>{
        antMed.key = Math.random().toString();
        setAntfam((currentAntFam)=>{
            return [antFam, ...currentAntFam]
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
    
    <AddAntFamiliaux addAntFam={addAntFam} />
</View>
</TouchableWithoutFeedback>
</Modal>

<MaterialIcons name="add-box" size={28} color="black"  onPress={() => setModalOpen(true)} style={styles.modalToggle} />
{/** 
<MaterialIcons name='add' size={28} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
*/}
<FlatList
  numColumns={1}
  data={antFam}
  renderItem={({ item }) => (
    <TouchableOpacity>
    <View style={styles.container2}>
    <FontAwesome style={styles.icon} name="edit" size={24} color="black" />
    <View style={styles.container}>
    <Text style={globalStyles.titleText}>Parent : {item.parent}</Text>
    <Text style={globalStyles.titleText}>Maladie : {item.maladie} </Text>
    </View>
    </View>
    </TouchableOpacity>
    )}
/>

</View>
    )
}

const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:26,
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
        flexDirection:'column'
      },
      display:{
        flex:1,
        fontWeight:'bold',
        textAlign:'center',
    } ,
    container1:{
        justifyContent:"space-around",
      },
    container2:{
       flexDirection:'row',
       backgroundColor:'lightgray',
       margin:6,
    },
    icon:{
        position:'absolute',
        right:50,
        top:30,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  })