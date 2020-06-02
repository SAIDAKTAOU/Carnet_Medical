import React from 'react';
import {Button,StyleSheet, View, Text} from 'react-native';
import TextInput from '../../shared/TextInput';
import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const AntFamSchema = yup.object({
    parent: yup.string().required(),
    maladie:yup.string().required(),
})

export default function AddAntMedicaux({ addAntFam }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ parent: '', maladie:'',}}
           validationSchema={AntFamSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addAntFam(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput  returnKeyType="next" label='Parent' onChangeText={props.handleChange('parent')} value={props.values.parent} onBlur={props.handleBlur('parent')} />
                 <Text style={globalStyles.errorText}>{props.touched.parent && props.errors.parent}</Text>
                 
                 <TextInput  returnKeyType="next" label='Maladie' onChangeText={props.handleChange('maladie')} value={props.values.maladie} onBlur={props.handleBlur('maladie')} />
                 <Text style={globalStyles.errorText}>{props.touched.maladie && props.errors.maladie}</Text>

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