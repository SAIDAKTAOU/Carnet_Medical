import React from 'react';
import {Button,StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import { globalStyles } from '../../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../../shared/button';

const BilanAnalyseSchema = yup.object({
    name: yup.string().required(),
    specialite:yup.string().required(),
    date:yup.string().required(),
    prix:yup.string().required()
})

export default function AddBilanAnalyse({ addBilanAnalyse }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: '', specialite:'',date: '',prix:'', image:''}}
           validationSchema={BilanAnalyseSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addBilanAnalyse(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput returnKeyType="next" label='Docteur' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

                 <TextInput returnKeyType="next" label='Specialite' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('specialite')} value={props.values.specialite} onBlur={props.handleBlur('specilite')} />
                 <Text style={globalStyles.errorText}>{props.touched.specialite && props.errors.specialite}</Text>

                 <TextInput returnKeyType="next" label='Date' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput returnKeyType="next" label='Prix' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('prix')} value={props.values.prix} onBlur={props.handleBlur('prix')} />
                 <Text style={globalStyles.errorText}>{props.touched.prix && props.errors.prix}</Text>

                 <TextInput returnKeyType="next" label='Bilan Analyse' mode='outlined' style={{marginTop: 10}} theme={{colors: {primary: '#6988cc', background: '#fff' }}} onChangeText={props.handleChange('image')} value={props.values.image} onBlur={props.handleBlur('image')} />
                 <Text style={globalStyles.errorText}>{props.touched.image && props.errors.image}</Text>

                 
                 
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
