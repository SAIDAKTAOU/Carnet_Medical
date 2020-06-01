import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

import { globalStyles } from '../../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../../shared/button';

const BilanAnalyseSchema = yup.object({
    name: yup.string().required(),
})

export default function AddBilanAnalyse({ addBilanAnalyse }){

    return(
        <View style={globalStyles.container}>
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
                 <TextInput style={globalStyles.input} placeholder='Docteur' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

                 <TextInput style={globalStyles.input} placeholder='Specialite' onChangeText={props.handleChange('specialite')} value={props.values.specialite} onBlur={props.handleBlur('specilite')} />
                 <Text style={globalStyles.errorText}>{props.touched.specialite && props.errors.specialite}</Text>

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Prix' onChangeText={props.handleChange('prix')} value={props.values.prix} onBlur={props.handleBlur('prix')} />
                 <Text style={globalStyles.errorText}>{props.touched.prix && props.errors.prix}</Text>

                 <TextInput style={globalStyles.input} placeholder='Bilan Analyse' onChangeText={props.handleChange('image')} value={props.values.image} onBlur={props.handleBlur('image')} />
                 <Text style={globalStyles.errorText}>{props.touched.image && props.errors.image}</Text>

                 
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
