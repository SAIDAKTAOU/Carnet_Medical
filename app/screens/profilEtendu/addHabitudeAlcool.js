import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const HabitudeAlcoolSchema = yup.object({
    name: yup.string().required(),
})

export default function AddHabitudeAlcool({ addHabitudeAlcool }){

    return(
        <View style={globalStyles.container}>
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
                 <TextInput style={globalStyles.input} placeholder='Nom du Habitude' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 <TextInput style={globalStyles.input} placeholder='Information' onChangeText={props.handleChange('info')} value={props.values.info} onBlur={props.handleBlur('info')} />
                 <Text style={globalStyles.errorText}>{props.touched.info && props.errors.info}</Text>

                
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
