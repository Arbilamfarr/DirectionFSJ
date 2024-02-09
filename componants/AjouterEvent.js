import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import {db,collection,addDoc,getDocs} from './../firebase'

import SelectDropdown from 'react-native-select-dropdown'
import { places } from './constante';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {TextInput,Button, ActivityIndicator} from 'react-native-paper'
import AlertSucces from './AlertSucces';
import AlertFailed from './AlertFailed';
// import DateTimePicker from '@react-native-community/datetimepicker';





const AjouterEvent = ({navigation}) => {
  const [id, setId] = useState('');  
  const [id_admin, setId_admin] = useState('');

  const [titre, setTitre] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [date, setDate] = useState('')
  const [dateFin, setDateFin] = useState('');
  const [place, setPlace] = useState('');

  const [description, setDescription] = useState('');
  const [personnes, setPersonnes] = useState([]);
  const [succes, setSucces] = useState(false);
  const [failed, setFailed] = useState(false);

  // const [showDatePicker, setShowDatePicker] = useState(false);



  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowDatePicker(false);
  //   setDate(currentDate);
  //   console.log(currentDate)
  // };
  
  const getId=async()=>{
    
      try {
        const querySnapshot = await getDocs(collection(db, 'id_admin'));
  
       
        const data = querySnapshot.docs.map((doc) => doc.data());
        setId_admin(data[0].id_admin);
        console.log(data[0].id_admin)
        
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    
  }
  useEffect(()=>{
  getId()
  },[]);

  const addPerson = () => {
    setPersonnes([...personnes, '']);
  };

  const updatePersonName = (index, newName) => {
    const updatedPersonnes = [...personnes];
    updatedPersonnes[index] = newName;
    setPersonnes(updatedPersonnes);
  };

  const renderPeopleInputs = () => {
    return personnes.map((person, index) => (
      <TextInput
        key={index}
        style={styles.input}
        label={`Name complet person ${index + 1}`}
        value={person}
        onChangeText={(text) => updatePersonName(index, text)}
      />
    ));
  };


const saveEvent = async () => {
  if(id==id_admin){
  const evenmentCollectionRef = collection(db, "Event");

  // Utilisez addDoc sans spécifier un identifiant
  await addDoc(evenmentCollectionRef, {
    intitule: titre,
    dateDebut: dateDebut,
    dateFin: dateFin,
    calender: date,
    place: place,
    description: description,
    personnes: personnes
  });
  setSucces(true)
  setTitre('')
  setId('')
  setDate('')
  setDateDebut('')
  setDateFin('')
  setDescription('')
  setPersonnes([])
  setPlace('')
}else{
  setFailed(true)
  setTitre('')
  setId('')
  setDate('')
  setDateDebut('')
  setDateFin('')
  setDescription('')
  setPersonnes([])
  setPlace('')
  }
};


  return (
  <View  style={styles.container}>

   <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                 navigation.navigate("Event")
                }}>
                <FeatherIcon
                  color="#000"
                  name="chevron-left"
                  size={20} />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>
             Event
            </Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon
                  color="#000"
                  name="more-vertical"
                  size={20} />
              </TouchableOpacity>




            </View>
          </View>
    <View style={{position:'absolute',zIndex:20,width:'100%',marginTop:50}}>
    {succes?<AlertSucces setSucces={setSucces}/>:''}
    {failed?<AlertFailed setFailed={setFailed}/>:'' }
   </View>
          {(id_admin!='')?
    <ScrollView>
   
    <View style={styles.profile}>
    <Image
                alt=""
                source={
                  require("./../assets/images/logo.png")
                }
                style={styles.profileAvatar} />
                <Text style={styles.title1}>Faculté des sciences chouaib doukkali</Text>
               
    </View>
      <View style={{ padding: 10 }}>
      <Text style={styles.title2}>Add event</Text>
      <TextInput
          label="Id"
          value={id}
          onChangeText={(text) => setId(text)}
          style={styles.input}
        />
           <TextInput
          label="Title"
          value={titre}
          onChangeText={(text) => setTitre(text)}
          style={styles.input}
        />
         
          
         <TextInput
          label="Day event (dd/mm/yyyy)"
          value={date}
          onChangeText={(text) => setDate(text)}
          style={styles.input}
        />
          {/* {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )} */}
      
           <TextInput
          label="Hour start time (hh:mm)"
          value={dateDebut}
          onChangeText={(text) => setDateDebut(text)}
          style={styles.input}
        />

        
           <TextInput
          label="Hour end time  (hh:mm) "
          value={dateFin}
          onChangeText={(text) => setDateFin(text)}
          style={styles.input}
        />
        
         <SelectDropdown
	                data={places}
                    
	                onSelect={(selectedItem, index) => {
	                	setPlace(selectedItem)
                        console.log(selectedItem)
	                }}
                    buttonStyle={{
                           height:50,
                           width:"93%",
                           paddingLeft:22,
                           flexDirection:'row',
                           alignItems:'center',
                           borderTopRightRadius:10,
                           borderBottomColor:'#f00',
                           paddingVertical:10,
                           marginVertical:10,
                           marginHorizontal:10,
                         borderTopEndRadius:15,
                           backgroundColor:'white',
                           
                           
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

                       
                        
                      }}
                      defaultButtonText="choose place for event"
	                buttonTextAfterSelection={(selectedItem, index) => {
	                	return selectedItem
	                }}
	                rowTextForSelection={(item, index) => {
	                	return item
	                }}
                />
        
        <TextInput
            style={styles.input}
          multiline
          label="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />

       
        {renderPeopleInputs()}

        <Button  mode="contained" style={styles.button} onPress={addPerson} >Add person</Button>

        <Button mode="contained" style={styles.button} onPress={saveEvent} >Save</Button>
      </View>
    </ScrollView>:<ActivityIndicator></ActivityIndicator>}
    </View>
  );
};

export default AjouterEvent;
const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
       
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
      header: {

        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
      },
      headerAction: {
        width: 40,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      headerTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1d1d1d',
      },
      /** Profile */
      profile: {
        padding: 24,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileAvatarWrapper: {
        position: 'relative',
      },
    profileAvatar: {
        width: 72,
        height: 72,
        borderRadius: 9999,
      },
      title1:{
        
        fontSize: 14,
        color:'gray',
        fontStyle: 'italic',
        fontWeight: 'normal'
      },
      title2:{
        fontFamily: 'sans-serif',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical:10,
      },
      input:{
        marginVertical:10,
        marginHorizontal:10,
        borderTopEndRadius:15,
       backgroundColor:'white',
      },
      button:{
        marginVertical:10,
        marginHorizontal:20
      }

})