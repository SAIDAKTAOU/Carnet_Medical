import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const HabitudeAlcoolSchema = yup.object({
    name: yup.string().required(),
})

export default function AddHabitudeAlcool({ addHabitudeAlcool }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: '',info:''}}
           validationSchema={HabitudeAlcoolSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addHabitudeAlcool(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput  label='Nom du Habitude' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 <TextInput label='Information' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('info')} value={props.values.info} onBlur={props.handleBlur('info')} />
                 <Text style={globalStyles.errorText}>{props.touched.info && props.errors.info}</Text>

                
                 
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
