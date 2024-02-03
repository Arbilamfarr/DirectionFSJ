
import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text as RNText, Dimensions, Alert } from 'react-native';
import { TextInput, Button,Text } from 'react-native-paper';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import  {auth}  from '../firebase'; // Assurez-vous d'ajuster le chemin en conséquence

const Enregistrer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
  
    // Regular expression to check if the email has the domain "@ucd.ac.ma"
    const emailRegex = /^[^\s@]+@ucd\.ac\.ma$/i;
  
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email with the domain "@ucd.ac.ma"');
      return;
    }else{
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Utilisateur enregistré :', user);
      Alert.alert('Inscription réussie !');
      navigation.navigate("Main",{email:email})
    } catch (error) {
      console.error('Erreur d\'inscription :', error.message);
      Alert.alert('Erreur d\'inscription', error.message);
    }}
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
          <Text variant='displaySmall' style={styles.logintext}>Signup</Text>
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
        <Button mode="contained" onPress={handleSignUp} style={styles.button}>
          Enregistrer
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

});

export default Enregistrer;