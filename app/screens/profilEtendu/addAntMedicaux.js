import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const AntMedSchema = yup.object({
    name: yup.string().required(),
})

export default function AddAntMedicaux({ addAntMed }){

    return(
        <View style={globalStyles.container}>
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
                 <TextInput style={globalStyles.input} placeholder='Nom' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
