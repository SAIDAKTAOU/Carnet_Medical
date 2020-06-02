import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

import TextInput from '../../../shared/TextInput';
import { globalStyles } from '../../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../../shared/button';

const OrdonnanceSchema = yup.object({
    name: yup.string().required(),
    adresse: yup.string().required(),
    date: yup.string().required(),
    prix: yup.string().required(),
})

export default function AddOrdonnance({ addOrdonnance }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: '', adresse:'',date:'',prix:'', image:''}}
           validationSchema={OrdonnanceSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addOrdonnance(values)
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
               label='Prix' returnKeyType='next' onChangeText={props.handleChange('prix')} value={props.values.prix} onBlur={props.handleBlur('prix')} />
               <Text style={globalStyles.errorText}>{props.touched.prix && props.errors.prix}</Text>

               <TextInput returnKeyType='next' label='Ordonnance' onChangeText={props.handleChange('image')} value={props.values.image} onBlur={props.handleBlur('image')} />
                 <Text style={globalStyles.errorText}>{props.touched.image && props.errors.image}</Text>


               {/*
                 <TextInput style={globalStyles.input} placeholder='Docteur' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

                 <TextInput style={globalStyles.input} placeholder='Specialite' onChangeText={props.handleChange('specialite')} value={props.values.specialite} onBlur={props.handleBlur('specilite')} />
                 <Text style={globalStyles.errorText}>{props.touched.specialite && props.errors.specialite}</Text>

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Prix' onChangeText={props.handleChange('prix')} value={props.values.prix} onBlur={props.handleBlur('prix')} />
                 <Text style={globalStyles.errorText}>{props.touched.prix && props.errors.prix}</Text>

                 <TextInput style={globalStyles.input} placeholder='Ordonnance' onChangeText={props.handleChange('image')} value={props.values.image} onBlur={props.handleBlur('image')} />
                 <Text style={globalStyles.errorText}>{props.touched.image && props.errors.image}</Text>

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