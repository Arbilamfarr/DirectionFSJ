

import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text as RNText, Dimensions, Alert, SafeAreaView } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user.emailVerified) {
      navigation.navigate("Main")
      setEmail('')
      setPassword('')
    }else{
        Alert.alert(`User verified ${user.emailVerified}`)
      }

      
    } catch (error) {
     Alert.alert("login ","error for login not verified")
    }
  };

  return (
   
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={require('./../assets/images/logo.png')}
          style={styles.logo}
        ></ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text variant='displaySmall' style={styles.logintext}>Login</Text>
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
          placeholderTextColor="#0b5781"
        />
        <Button mode="contained"  onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <View style={styles.signupTextContainer}>
          <RNText style={styles.signupText}>I don't have an account?</RNText>
          <Button onPress={() => navigation.navigate('enregistrer')} textColor='#0b5781' style={styles.signupButton}>
            Create account !
          </Button>
        </View>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  signupTextContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    textAlign:'center',
    marginRight: 5,
  },
  signupButton: {
    fontWeight: 'bold',
    

  },
});

export default Login;
