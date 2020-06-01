import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const ChirurgieSchema = yup.object({
    name: yup.string().required(),
})

export default function AddChirurgie({ addChirurgie }){

    return(
        <View style={globalStyles.container}>
          <Formik
           initialValues={{ name: '', docteur:'', date:'',bien:''}}
           validationSchema={ChirurgieSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addChirurgie(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput style={globalStyles.input} placeholder='Nom du chirurgie' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 <TextInput style={globalStyles.input} placeholder='Docteur' onChangeText={props.handleChange('docteur')} value={props.values.docteur} onBlur={props.handleBlur('docteur')} />
                 <Text style={globalStyles.errorText}>{props.touched.docteur && props.errors.docteur}</Text>

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Bien' onChangeText={props.handleChange('bien')} value={props.values.bien} onBlur={props.handleBlur('bien')} />
                 <Text style={globalStyles.errorText}>{props.touched.bien && props.errors.bien}</Text>
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
