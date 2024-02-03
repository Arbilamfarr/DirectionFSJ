

import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text as RNText, Dimensions, Alert } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigation.navigate("Main")

      
    } catch (error) {
     Alert.alert("login echec")
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
          label="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Se connecter
        </Button>
        <View style={styles.signupTextContainer}>
          <RNText style={styles.signupText}>Je n'ai pas de compte?</RNText>
          <Button onPress={() => navigation.navigate('enregistrer',{email:email})} style={styles.signupButton}>
            Créer un compte
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
   color:"#6304c3",
   textAlign:'center',
   marginBottom:10,
   fontWeight:'600',
  },
  formContainer: {
    width: 300,
  },
  input: {
    marginBottom: 10,
    width:"1"
  },
  button: {
    marginTop: 10,
    
  },

  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    marginRight: 5,
  },
  signupButton: {
    fontWeight: 'bold',

  },
});

export default Login;
