import 'react-native-gesture-handler';
import React, {useState } from 'react';
import { TouchableOpacity,Text,StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useKeepAwake } from 'expo-keep-awake';

import Button from './app/shared/Button2';
import {TextInput} from 'react-native-paper';
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
     <TextInput
        label="Email"
        mode='outlined'
        theme={{colors: {primary: '#6988cc', background: '#fff' }}}
        style={{marginTop: 10}}
        value={email.value}
        returnKeyType="next"
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        />
     <TextInput
          label="Password"
          mode='outlined'
          theme={{colors: {primary: '#6988cc', background: '#fff' }}}
          style={{marginTop: 10}}
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: "" })}
          error={password.error}
          secureTextEntry
          autoCapitalize="none"
        />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button loading={loading} color={'#6988cc'} mode="contained" onPress={onLogin}>
        Login
      </Button>
     
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

   
      <Toast message={error} onDismiss={() => setError("")} />
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

      <TextInput
      label="Name"
      mode='outlined'
      theme={{colors: {primary: '#6988cc', background: '#fff' }}}
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
      theme={{colors: {primary: '#6988cc', background: '#fff' }}}
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
      label="Password"
      mode="outlined"
      theme={{colors: {primary: '#6988cc', background: '#fff' }}}
      style={{marginTop: 10}}
      returnKeyType="done"
      value={password.value}
      onChangeText={text => setPassword({ value: text, error: "" })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
      autoCapitalize="none"
    />

    <Button
      loading={loading}
      mode="contained"
      color={'#6988cc'}
      onPress={onSignUp}
      style={styles.button}
    >
      Sign Up
    </Button>

    <View style={styles.row}>
      <Text style={styles.label}>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>

    <Toast message={error} onDismiss={() => setError("")} />
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
      <Stack.Screen  name="bottomTab" component={MyTabs} />
      <Stack.Screen name="authLoadingScreen" component ={AuthLoadingScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component ={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
   
  container:{
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
   // alignItems: "center",
    justifyContent: "center"
   }, 
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
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});
