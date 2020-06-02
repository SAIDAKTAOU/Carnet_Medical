import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import TextInput from '../../shared/TextInput';
import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const AntMedSchema = yup.object({
    name: yup.string().required(),
})

export default function AddAntMedicaux({ addAntMed }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: ''}}
           validationSchema={AntMedSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addAntMed(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput  label='Nom' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
   
  container:{
    flex: 1,
    width: "100%",
   maxWidth: 340,
    alignSelf: "center",
    justifyContent: "center", 
   }, 
  })