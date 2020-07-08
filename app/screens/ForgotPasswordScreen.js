import React, { useState } from "react";
import { Text, StyleSheet,View, TouchableOpacity } from "react-native";
import { emailValidator } from "../core/utils";
import {TextInput} from 'react-native-paper';
import { theme } from "../core/theme";
import Button from "../shared/Button2";
import { sendEmailWithPassword } from "../api/auth-app";
import Toast from "../shared/Toast";

export default function ForgotPasswordScreen({navigation}) {

  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (response.error) {
      setToast({ type: "error", value: response.error });
    } else {
      setToast({
        type: "success",
        value: "Email with password has been sent."
      });
    }

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        mode="outlined"
        theme={{colors: {primary: '#6988cc', background: '#fff' }}}
        style={{marginTop: 10}}
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button
        loading={loading}
        color={'#6988cc'}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>

      <Toast
        type={toast.type}
        message={toast.value}
        onDismiss={() => setToast({ value: "", type: "" })}
      />
    </View>
  )
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
  back: {
    width: "100%",
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: "100%"
  }
});

