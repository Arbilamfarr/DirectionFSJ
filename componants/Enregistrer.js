
import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text as RNText, Dimensions, Alert, StatusBar } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import { createUserWithEmailAndPassword,sendEmailVerification } from '@firebase/auth';
import  {auth}  from '../firebase'; // Assurez-vous d'ajuster le chemin en conséquence

const Enregistrer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// // Send verification email
const sendEmailVerificationUser = async (user) => {
  try {
    await sendEmailVerification(user);
    
    Alert.alert(
      "Verification Email Sent",
      "Please check your email for verification"
    );
  } catch (error) {
    console.error("Error sending verification email:", error);
    Alert.alert("Error", "Failed to send verification email");
  }
};
  const handleSignUp = async () => {
    if (email=='' || password=='') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
  
    const emailRegex = /^[^\s@]+@ucd\.ac\.ma$/i;
  
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email with the domain "@ucd.ac.ma"');
      return;
    }else{
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigation.navigate("Login")
      sendEmailVerificationUser(user)
      setEmail('')
      setPassword('')
    } catch (error) {
   
      Alert.alert('Error save', error.message);
    }}
  };

  return (
    <View style={styles.container}>
        <StatusBar  backgroundColor="#097ec0" ></StatusBar>

      <View style={styles.logoContainer}>
        <ImageBackground
          source={require('./../assets/images/logo.png')}
          style={styles.logo}
        ></ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text variant='displaySmall' style={styles.logintext}>Signup</Text>
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSignUp} style={styles.button}>
          Save
        </Button>
        
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 250,
  },
  logintext:{
    color:"#0b5781",
   textAlign:'center',
   marginBottom:10,
   fontWeight:'600',
  },
  formContainer: {
    width: 300,
  },
  input: {
    marginBottom: 10,
    width:"1",
    backgroundColor:'#e1f2fd',
  },
  button: {
    marginTop: 10,
    backgroundColor:'#14a2e3'

  },

});

export default Enregistrer;