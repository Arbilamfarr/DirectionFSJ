import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,Alert,
  TouchableOpacity,
  TextInput, Modal,Pressable
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Map from './Map';
import SelectDropdown from 'react-native-select-dropdown'
import { Button } from 'react-native-paper';

const latitude=33.225397172070565;
const longitude=-8.486188605007804;
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [destination,setDestination]=useState({latitude:33.225397172070565,longtitude:-8.486188605007804})

  const salles = Array.from({ length: 56 }, (_, index) => `Salle ${index + 1}`);
  const batiment=['Amphi Nafis','Amphi Bayrouni','Amphi Farabi','Amphi iben Younnes','Amphi iben Haitam','Nouvel Amphi','D. informatique','D. Chimie','D. Mathematique' ,'D. Physique','D. biologique','D. geologique','B. Etudiants','B. Professeurs','Toilet 1','Toilet 2','Bloc A','Bloc B','Bloc C','Bloc D','centre doctorat ucd','Bibliotheque 1','Bibliotheque 2',...salles]
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View>
          <View style={styles.actionWrapper}>
          <Modal
        animationType="left"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World </Text>
            
              <Button icon="location-exit"
              
               onPress={() => setModalVisible(!modalVisible)}
               style={[styles.button, styles.buttonClose]}>
                <Text style={{color:'black'}}>Exit</Text>
              </Button>
             
          </View>
        </View>
      </Modal>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true)
              }}
              style={{ marginRight: 'auto' }}>
              <View style={styles.action}>
                <FeatherIcon
                  color="#6a99e3"
                  name="user"
                  size={22} />
              </View>
            </TouchableOpacity>
           
            
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon
                  color="#6a99e3"
                  name="bell"
                  size={22} />
              </View>
            </TouchableOpacity>

           
          </View>

          <Text style={styles.title}>Place Destination</Text>

          <View style={styles.search}>
            <View style={styles.searchInput}>
              <View style={styles.inputWrapper}>
              
                 <View>
                 <SelectDropdown
                  
	                data={batiment}
	                 onSelect={(selectedItem, index) => {
		               console.log(selectedItem, index)
	                 }}
	                buttonTextAfterSelection={(selectedItem, index) => {
	
		               return selectedItem
	                   }}
	                rowTextForSelection={(item, index) => {
	                	return item
	                }}
                  buttonStyle={{
                           height:50,
                           width:"100%",
                           paddingLeft:22,
                           flexDirection:'row',
                           alignItems:'center',
                           borderRadius:10,
                           
                  }}
                  searchInputStyle={{
                    borderColor: '#9eadba', 
                    borderWidth: 1, 
                    borderRadius: 8, 
                    padding: 10, 
                    backgroundColor: '#ffffff', 
                    color: '#333333', 
                    fontSize: 16,
                      }}
                     search={true}
                     searchPlaceHolder='Saisir destination'
                     dropdownStyle={
                      {
                        borderRadius:10,
                        height:'60%',
                        width:'70%',
                        paddingTop:2,
                        alignItems:'center',

                       
                        
                      }
                     }
                   
                  />
                 </View>

                <View style={styles.inputIcon}>
                  <FeatherIcon
                    color="#9eadba"
                    name="map-pin"
                    size={32} />
                </View>
              </View>
            </View>

            {/* <TouchableOpacity
              onPress={() => {
               setDestination( {
                latitude:33.222242,
                longtitude: -8.484841,
               })
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
           <Map destination={destination} ></Map>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    marginTop: 24,
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
   modalView: {
    width:200,
    marginTop: 60,
    marginLeft:20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    opacity:0.8,
    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
    
  },
  /** Input */
  // input: {
  //    borderColor: '#9eadba', // Border color
  //   borderWidth: 1, // Border width
  //   borderRadius: 8, // Border radius
  //   padding: 10, // Padding
  //   backgroundColor: '', // Background color
  //   color: '#333333', // Text color
  //   fontSize: 16, // Font size
  // },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    borderRadius:8,
    justifyContent:'space-between'
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    bottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});