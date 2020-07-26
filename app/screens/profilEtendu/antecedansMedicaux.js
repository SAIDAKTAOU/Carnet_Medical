import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Keyboard, FlatList, Modal, TouchableWithoutFeedback} from 'react-native';

import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import AddAntMedicaux from './addAntMedicaux';

export default function AntecedansMedicaux({ navigation }){
    const [antMed, setAntMed] = useState([
        {name :'alergie', key:'1'},
        {name :'les maladies cardiaques', key:'2'},
        {name :'diabete', key:'3'},
        {name :'cancer', key:'4'},
        {name :'sida', key:'5'},
        {name :'maladie saline', key:'6'},
        {name :'asthme', key:'7'},
        {name :'alergie', key:'8'},
        {name :'hepatite', key:'9'},
        {name :'migraine', key:'10'},
        {name :"maux d'estomac", key:'11'},
    ])

    const addAntMed =(antMed)=>{
        antMed.key = Math.random().toString();
        setAntMed((currentAntMed)=>{
            return [antMed, ...currentAntMed]
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
                
                <AddAntMedicaux addAntMed={addAntMed} />
            </View>
            </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add-box" size={28} color="#9159b8"  onPress={() => setModalOpen(true)} style={styles.modalToggle} />
            {/** 
            <MaterialIcons name='add' size={28} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
           */}
                <DataTable style={styles.datatable}>
        <DataTable.Header>
          <DataTable.Title>Nom </DataTable.Title>
        </DataTable.Header>
            <FlatList
              data={antMed}
              renderItem={({ item }) => (
                <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
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
        flexDirection:'row'
      },
      icon:{
        position:'absolute',
        right:50,
        top:15,
    },
    container1:{
        justifyContent:"space-around",
      },
  })
