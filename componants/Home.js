import React, { useState ,useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,Alert,
  TouchableOpacity,
  TextInput, Modal
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Map2 from './Map2';
import SelectDropdown from 'react-native-select-dropdown'
import { Button } from 'react-native-paper';
import { signOut } from "firebase/auth";
import { auth } from './../firebase.js';
import {btiment,amphis,blocs,laboratoires,parking,toilettes,buffets,bibliotheques,departements,affichage,terrain,anapec,ucd,mosquée} from './constante.js'




export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [destination,setDestination]=useState({latitude:0,longtitude:0})
   const [description,setDescription]=useState("faculté science el jadida")
   const [title,setTitle]=useState("fsj")
   const [user, setUser] = useState(null);

  const batiment=[...amphis,...blocs,...laboratoires,...parking,...toilettes,...buffets,...bibliotheques,...departements,affichage,terrain,anapec,ucd,mosquée]
  const flatBatiment = [
    ...btiment.batiment.amphi,
    ...btiment.batiment.blocs,
    ...btiment.batiment.laboratoires,
    ...btiment.batiment.parking,
    ...btiment.batiment.toilettes,
    ...btiment.batiment.buffets,
    ...btiment.batiment.bibliotheques,
    ...btiment.batiment.departements,
    btiment.batiment.affichage,
    btiment.batiment.terrain,
    btiment.batiment.anapec,
    btiment.batiment.ucd,
    btiment.batiment.mosquée,
    btiment.batiment.administration,
  ];
  
 const handelLogOut=()=>{
  signOut(auth).then(() => {
   navigation.navigate('Auth')
  }).catch((error) => {
    Alert.alert("Log Out","error for Log Out")
  });
  
 }
  useEffect(() => {
   
    const user = auth.currentUser;
    if(user){
    setUser(user)
    console.log(user)}
    else{
      setUser("not connected");
    }

  }, []); 

  const getLocation = (selectedItem) => {
    // Find the selected item in the flatBatiment array
    const selectedLocation = flatBatiment.find(item => item.name.toUpperCase() === selectedItem);
  
    if (selectedLocation && selectedLocation.location) {
      return selectedLocation;
    } else {
      return { latitude: 0, longtitude: 0 };
    }
  };
  
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
         
          <Button          
               onPress={() => setModalVisible(!modalVisible)}
               style={[styles.button, styles.buttonClose]}>
               <FeatherIcon
                  color="#6a99e3"
                  name="x-square"
                  size={22} />
              </Button>
            <Text style={styles.modalText}>{user?user.email:''}</Text>
          
            <Button
        mode="contained"
        onPress={()=>handelLogOut()}
        style={{ marginVertical: 8, backgroundColor: '#e74c3c' }}
      >
      <FeatherIcon name="log-out" color="white" size={16} />
        Log out
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
            <Text style={styles.title}>Place Destination</Text>
              <View style={[styles.headerAction, { alignItems: 'center' }]}>
              <TouchableOpacity
                onPress={() => {
                 navigation.navigate('Event')
                }}>
                <FeatherIcon
                  color="#000"
                  name="chevron-right"
                  size={35} />
              </TouchableOpacity>
            </View>          
          </View>
          <View style={styles.search}>
            <View style={styles.searchInput}>
              <View style={styles.inputWrapper}>
              
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.btn}>
                  <FeatherIcon
                    color="#9eadba"
                    name="map-pin"
                    size={32} />
                </View>
                 <SelectDropdown
                  
	                data={batiment}
	                 onSelect={(selectedItem, index) => {
                    const selectedLocation = getLocation(selectedItem);
                    setDestination(selectedLocation.location);
                    setDescription(selectedLocation.description);
                    setTitle(selectedLocation.name);
	                 }}
	                buttonTextAfterSelection={(selectedItem, index) => {
	
		               return selectedItem
	                   }}
	                rowTextForSelection={(item, index) => {
	                	return item
	                }}
                  buttonStyle={{
                           height:50,
                           width:"90%",
                           paddingLeft:22,
                           flexDirection:'row',
                           alignItems:'center',
                           borderRadius:10,
                           marginLeft:15,
                           marginRight:15
                           
                  }}
                  searchInputStyle={{
                    borderColor: '#9eadba', 
                    borderWidth: 1, 
                    borderRadius: 8, 
                    padding: 10, 
                    backgroundColor: '#ffffff', 
                    color: '#333333', 
                    fontSize: 18,
                      }}
                     search={true}
                     searchPlaceHolder='Saisir destination'
                     dropdownStyle={
                      {
                        borderRadius:10,
                        height:'60%',
                        width:'80%',
                        paddingTop:2,
                        paddingHorizontal:2,
                        alignItems:'center',
                      }
                     }
                     defaultButtonText="choose destination"
                  />
                 </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.placeholder}>
          <View style={styles.placeholderInset}>
           <Map2 title={title} destination={destination} description={description} ></Map2>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    padding: 5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    
   
    marginTop: 10,
    marginBottom: 10,
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
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
   modalView: {
    width:300,
    marginTop: 60,
    marginLeft:20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
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
  
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
   
   
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
    padding:15,
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    position:'absolute',
    zIndex: 1000,
    marginLeft:20
    
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
    borderStyle: 'solid',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});