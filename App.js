import 'react-native-gesture-handler';
import React, {useState } from 'react';
import { TouchableOpacity,Text,StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useKeepAwake } from 'expo-keep-awake';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';


import Button from './app/shared/Button2';
import TextInput from './app/shared/TextInput';
import {theme} from './app/core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "./app/core/utils";
import { loginUser } from './app/api/auth-app';
import { signInUser } from "./app/api/auth-app";
import Toast from './app/shared/Toast';

import ProfilDrawer from './app/navigation/profilDrawer';
import MyTabs from './app/navigation/bottomTabNav';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import AuthLoadingScreen from './app/screens/AuthLoadingScreen';
import SplashScreen from './app/screens/SplashScreen';



function SignInScreen({navigation}) {

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async () => {
    

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }
    //else{
      
    //  navigation.navigate('profil');
    //}

    setLoading(false);
  };
  return (
     
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.text_header}>Bienvenue !</Text>
    </View>
    <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <View style={styles.action}>
    <TextInput
        label="Email"
        mode='outlined'
        theme={{colors: {primary: '#ff6666', background: '#fff' }}}
        value={email.value}
        returnKeyType="next"
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
        />
        <TextInput
          label="Password"
          mode='outlined'
          theme={{colors: {primary: '#ff6666', background: '#fff' }}}
          style={{marginTop: 10}}
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: "" })}
          error={password.error}
          errorText={password.error}
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.forgotPassword}>
        <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>
        
        <TouchableOpacity onPress={onLogin}>
        <View style={styles.button}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#ff6666', '#ff6666']}
          style={styles.signIn}>
              <Text style={styles.textSignIn}>Se connecter</Text>
          </LinearGradient>
          </View>
          </TouchableOpacity >
          
          <TouchableOpacity onPress={() => navigation.navigate("signUp")} style={{width:'100%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:15 ,borderColor:'#6988cc', borderWidth:1,}}>
          <View style={styles.button}>
          <Text style={{fontWeight:'bold',fontSize:18,color:"#ff6666", marginBottom:30}}>S'inscrire</Text>
          </View>
          </TouchableOpacity>

       


   
      <Toast message={error} onDismiss={() => setError("")} />
        </View>
    </Animatable.View>

    </View>
  );
}

function SignUpScreen({navigation}) {

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSignUp = async () => {

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }
    //else{
      //navigation.navigate('profil')
    //}

    setLoading(false);
  };
  return(
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.text_header}>Bienvenue !</Text>
    </View>
    <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <View style={styles.action}>
      <TextInput
      label="Nom d'utilisateur"
      mode='outlined'
      theme={{colors: {primary: '#ff6666', background: '#fff' }}}
      style={{marginTop: 10}}
      returnKeyType="next"
      value={name.value}
      onChangeText={text => setName({ value: text, error: "" })}
      error={!!name.error}
      errorText={name.error}
    />

    <TextInput
      label="Email"
      mode='outlined'
      theme={{colors: {primary: '#ff6666', background: '#fff' }}}
      style={{marginTop: 10}}
      returnKeyType="next"
      value={email.value}
      onChangeText={text => setEmail({ value: text, error: "" })}
      error={!!email.error}
      errorText={email.error}
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
    />

    <TextInput
      label="Mot de passe"
      mode='outlined'
      theme={{colors: {primary: '#ff6666', background: '#fff' }}}
      style={{marginTop: 10}}
      returnKeyType="done"
      value={password.value}
      onChangeText={text => setPassword({ value: text, error: "" })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
      autoCapitalize="none"
    />

        <TouchableOpacity onPress={onSignUp}>
        <View style={styles.button}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#ff6666', '#ff6666']}
          style={styles.signIn}>
              <Text style={styles.textSignIn}>S'inscrire</Text>
          </LinearGradient>
          </View>
          </TouchableOpacity >
          
          <TouchableOpacity onPress={() => navigation.navigate("login")} style={{width:'100%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:15 ,borderColor:'#6988cc', borderWidth:1,}}>
          <View style={styles.button}>
          <Text style={{fontWeight:'bold',fontSize:18,color:"#ff6666", marginBottom:30}}>Se connecter</Text>
          </View>
          </TouchableOpacity>
       

          <Toast message={error} onDismiss={() => setError("")} />
        </View>
    </Animatable.View>

  </View>
  )

}

const Stack = createStackNavigator();

export default function App({ navigation }) {

   useKeepAwake();

  return (
    <NavigationContainer>
        <Stack.Navigator
             initialRouteName="authLoadingScreen"
             screenOptions={{
             headerShown: false
      }}>
      <Stack.Screen name="login"  component={SignInScreen} options={
          {title: 'Login'},
          {headerLeft: null} }/>
      <Stack.Screen name="signUp"  component={SignUpScreen} options={
          {title: 'Sign Up'},
          {headerLeft: null} }  />
          <Stack.Screen name="SplashScreen"  component={SplashScreen} options={
          {title: 'Splash'},
          {headerLeft: null} }  />
      <Stack.Screen  name="bottomTab" component={MyTabs} />
      <Stack.Screen name="authLoadingScreen" component ={AuthLoadingScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component ={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
   
   forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: '#ff6666',
    fontWeight:'bold'
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
  },
  footer:{
    flex:3,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30,
  }, 
  container:{
    flex:1,
    backgroundColor:'#ff6666'
  },
  text_header:{
    color:'black',
    fontWeight:'bold',
    fontSize:30
  },
  action:{
  marginTop:35,
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
   },
   textSignIn:{
       color:'black',
       fontWeight:'bold',
       fontSize:18
   },
   button:{
     alignItems:'center',
     marginTop:30
   }
  
});

