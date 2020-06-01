import React from 'react';
import {Button,StyleSheet, View, Text} from 'react-native';

import TextInput from '../../../shared/TextInput';
import { globalStyles } from '../../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../../shared/button';

const ControleSchema = yup.object({
    name: yup.string().required(),
})

export default function AddControle({ addControle}){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: '', specialite:'',date: '',remarque:''}}
           validationSchema={ControleSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addControle(values)
           }}
          >
           {(props) => (
             <View>
                <TextInput
               label="Docteur"
               returnKeyType="next"
               onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
              <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
              
              <TextInput
               label="Specialite"
               returnKeyType="next"
               onChangeText={props.handleChange('specialite')} value={props.values.specialite} onBlur={props.handleBlur('specilite')} />
               <Text style={globalStyles.errorText}>{props.touched.specialite && props.errors.specialite}</Text>

               <TextInput
               label="Date"
               returnKeyType="next"
               onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
               <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

               <TextInput
               label="Date"
               returnKeyType="next"
               onChangeText={props.handleChange('remarque')} value={props.values.remarque} onBlur={props.handleBlur('remarque')} />
               <Text style={globalStyles.errorText}>{props.touched.remarque && props.errors.remarque}</Text>

               {/*
                 <TextInput style={globalStyles.input} placeholder='Docteur' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

                 <TextInput style={globalStyles.input} placeholder='Specialite' onChangeText={props.handleChange('specialite')} value={props.values.specialite} onBlur={props.handleBlur('specilite')} />
                 <Text style={globalStyles.errorText}>{props.touched.specialite && props.errors.specialite}</Text>

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Remarque' onChangeText={props.handleChange('remarque')} value={props.values.remarque} onBlur={props.handleBlur('remarque')} />
                 <Text style={globalStyles.errorText}>{props.touched.remarque && props.errors.remarque}</Text>

                 */}
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