import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

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
        <View style={globalStyles.container}>
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
                 <TextInput style={globalStyles.input} placeholder='Parent' onChangeText={props.handleChange('parent')} value={props.values.parent} onBlur={props.handleBlur('parent')} />
                 <Text style={globalStyles.errorText}>{props.touched.parent && props.errors.parent}</Text>
                 
                 <TextInput style={globalStyles.input} placeholder='Maladie' onChangeText={props.handleChange('maladie')} value={props.values.maladie} onBlur={props.handleBlur('maladie')} />
                 <Text style={globalStyles.errorText}>{props.touched.maladie && props.errors.maladie}</Text>

                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
