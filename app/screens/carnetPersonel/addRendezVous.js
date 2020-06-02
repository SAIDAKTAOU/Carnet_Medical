import React from 'react';
import {Button,StyleSheet, View, Text} from 'react-native';
import TextInput from '../../shared/TextInput';
import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const RendezVousSchema = yup.object({
    name: yup.string().required(),
    adresse:yup.string().required(),
    date:yup.string().required(),
    heure:yup.string().required()
})

export default function AddRendezVous({ addRendezVous }){

    return(
        <View style={styles.container}>
          <Formik
           initialValues={{ name: '', adresse:'',date: '', heure:''}}
           validationSchema={RendezVousSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addRendezVous(values)
           }}
          >
           {(props) => (
             <View>
               <TextInput
               label="Rendez Vous"
               returnKeyType="next"
               onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')}
               />
               <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

              <TextInput
               label="Adresse"
               returnKeyType="next"
               onChangeText={props.handleChange('adresse')} value={props.values.adresse} onBlur={props.handleBlur('adresse')}
               />
               <Text style={globalStyles.errorText}>{props.touched.adresse && props.errors.adresse}</Text>

               <TextInput
               label="Date"
               returnKeyType="next"
               onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')}
               />
               <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

               <TextInput
               label="Heure"
               returnKeyType="next"
               onChangeText={props.handleChange('heure')} value={props.values.heure} onBlur={props.handleBlur('heure')}
               />
               <Text style={globalStyles.errorText}>{props.touched.heure && props.errors.heure}</Text>

               {/** 
                 <TextInput style={globalStyles.input} placeholder='RendezVous' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

                 <TextInput style={globalStyles.input} placeholder='Adresse' onChangeText={props.handleChange('adresse')} value={props.values.adresse} onBlur={props.handleBlur('adresse')} />
                 <Text style={globalStyles.errorText}>{props.touched.adresse && props.errors.adresse}</Text>

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Heure' onChangeText={props.handleChange('heure')} value={props.values.heure} onBlur={props.handleBlur('heure')} />
                 <Text style={globalStyles.errorText}>{props.touched.heure && props.errors.heure}</Text>

                 
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
