import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,Dimensions, StatusBar } from 'react-native';
const {width,height}=Dimensions.get("window")

const Sblash = ({ navigation }) => {


  return (

    <View style={styles.container}>
        <StatusBar  backgroundColor="#097ec0" ></StatusBar>

      <Image
        source={require('../assets/images/mapsblach.png')} // Update the path accordingly
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Wellcome</Text>
      <Text style={styles.fsj}>Faculté des sciences chouaib doukkali</Text>
        <View style={styles.buttons}>
      <TouchableOpacity onPress={() => {
            
              navigation.navigate('Auth');
            }}>
            <View style={styles.btnXL}>
                          <Text style={styles.btnXLText}>Get started</Text>
            </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor:'#ffffff'
  },
  buttons: {
    marginTop:60,
    height: 300,
    justifyContent: 'space-between',
  },
  logo: {
   
    width: width-50, 
    height: 2*height/3, 
  },
  title:{
  letterSpacing:2,
  fontSize: 20,
  lineHeight: 28,
  fontWeight: '700',
  textAlign:'center'
  },
  fsj:{
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '300',
    textAlign:'center'
  },
  btnXL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#0569FF',
    borderColor: '#0569FF',
   

  },
  btnXLText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    color: '#fff',
  },
 
});

export default Sblash;