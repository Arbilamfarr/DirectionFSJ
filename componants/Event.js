import React, { useEffect,useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {db,collection,getDocs} from './../firebase';
import { ActivityIndicator } from 'react-native-paper';
import Avatar from './Avatar';
import {btiment} from './constante.js'
import Map from './Map.js';

export default function Event({navigation}){
  
  const [eventData, setEventData] = useState([]);
  const [direction,setDirection]=useState('');
  const [ind,setInd]=useState('');
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

  const getLocation = (selectedItem) => {
    // Find the selected item in the flatBatiment array
    const selectedLocation = flatBatiment.find(item => item.name.toUpperCase() === selectedItem);
  
    if (selectedLocation ) {
     
     setDirection(selectedLocation)
    
        } else {
      // Return a default location if the selected item is not found
      return { latitude: 0, longtitude: 0 };
    }
  };



  const getDataEvent = async () => {
    try {
      const today = new Date();
      const todayString = today.toLocaleDateString('fr-FR'); // Format the current date as "dd/MM/yyyy"
      console.log(todayString);
      const querySnapshot = await getDocs(collection(db, 'Event'));
      const data = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((event) => event.calender === todayString);
  
      setEventData(data);
      console.log(data);
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };
  
  
  useEffect(() => {
   
    getDataEvent()
    const intervalId = setInterval(() => {
      getDataEvent();
    }, 10000);

    return () => clearInterval(intervalId);
  } ,[]);
  return (
    <View style={{ flex: 1 }}>
        <StatusBar  backgroundColor="#097ec0" ></StatusBar>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                 navigation.navigate("Home")
                }}>
                <FeatherIcon
                  color="#000"
                  name="chevron-left"
                  size={28} />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>
             Events Today
            </Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => {
                navigation.navigate('AjouterEvent')
                
                }}>
                <FeatherIcon
                  color="#000"
                  name="chevron-right"
                  size={28} />
              </TouchableOpacity>




            </View>
          </View>
          <ScrollView>
          
          {eventData.length > 0 ? (eventData.map((item,index)=>
         <View>
         {direction&& ind==index ?
               <View style={{position:'absolute',height:2*Dimensions.get('window').height/3,width:Dimensions.get('window').width-30,marginTop:-5,zIndex:20,}}>
              <View style={{flexDirection:'row' ,justifyContent:'flex-end'}}>
              <TouchableOpacity
                    onPress={() => {
                    setDirection('')
                    }}>
                    <View style={{justifyContent:'flex-end'}}>
                      <FeatherIcon color="#f24141" name="x" size={30} />
                   </View>
               </TouchableOpacity>
              </View>
               
                  <Map destination={direction.location} title={direction.title} description={direction.description}/>
              </View>:''}
          <View style={{flext:1,justifyContent:'center'}}>
            <Text style={styles.title}>{item.intitule}</Text>
            </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Date the event </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.calender}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Hour start time       </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.dateDebut}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Hour end event              </Text>
        
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.dateFin}</Text>
            </View>
          </View>
       
          <View style={styles.row}>
            <Text style={styles.rowField}>Place</Text>
        
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.place} <TouchableOpacity
                onPress={() => {
             getLocation(item.place)
             setInd(index)

                }} style={{marginHorizontal:10}}>
                <FeatherIcon
                  color="#0a3047"
                  name="map-pin"
                  size={24} />
              </TouchableOpacity></Text>
            </View>
           
          </View>

          <View style={styles.row2}>
            <Text style={styles.rowField}>Person </Text>
            <FlatList
              data={item.personnes}
              renderItem={({item}) => <Avatar name= {item}/>}
               horizontal
            />
          </View>

          <Text style={styles.subtitle}>Description</Text>

          <Text style={styles.paragraph}>
           {item.description}
          </Text>
          <View style={{borderBottomWidth:2,borderColor:'#09699b'}}></View>
          </View>
          
        )):(<ActivityIndicator></ActivityIndicator>)}
          
            
        
        </ScrollView>
        </View>
       
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    paddingHorizontal: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1e1e1e',
    marginTop: 10,
    marginBottom: 8,
    textAlign:'center'
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 9999,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1e1e1e',
    marginTop: 10,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
    marginBottom: 16,
   
  },

  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  /** Row */
  row: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row2: {
    justifyContent: 'flex-start',
  },
  rowField: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0e0e0e',
    width: 140,
    
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#171717',
  },
  rowList: {
    flexDirection: 'column',
  },
  rowUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowUserText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#171717',
    marginLeft: 6,
  },
  /** Badge */
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bde6fa',
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0a3047',
  },
  
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#24232A',
    borderColor: '#24232A',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
 
});