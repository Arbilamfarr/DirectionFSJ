import React, { useEffect,useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {db,collection,getDocs} from './../firebase';
import { ActivityIndicator } from 'react-native-paper';
import Avatar from './Avatar';
export default function Event({navigation}){
  
  const [eventData, setEventData] = useState([]);

  const getDataEvent= async()=>{
    try {
      const querySnapshot = await getDocs(collection(db, 'Event'));

     
      const data = querySnapshot.docs.map((doc) => doc.data());
      setEventData(data);
      console.log(data)
      
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }
  useEffect(() => {
    getDataEvent()
    
  } , []);
  return (
    <View style={{ flex: 1 }}>
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
          <ScrollView>
          {eventData.length > 0 ? (
         <View>
          <Text style={styles.title}>{eventData[0].intitule}</Text>

          <View style={styles.row}>
            <Text style={styles.rowField}>Date de evenemeent  </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{eventData[0].calender}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Heure de  début       </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{eventData[0].dateDebut}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowField}>Heure de fin               </Text>
        
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{eventData[0].dateFin}</Text>
            </View>
          </View>
       

          <View style={styles.row2}>
            <Text style={styles.rowField}>Personnes </Text>
            <FlatList
              data={eventData[0].personnes}
              renderItem={({item}) => <Avatar name= {item}/>}
               horizontal
            />
          </View>

          <Text style={styles.subtitle}>Description</Text>

          <Text style={styles.paragraph}>
           {eventData[0].description}
          </Text>
          </View>
        ):(<ActivityIndicator></ActivityIndicator>)}
        </ScrollView>
        </View>
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    color: '#1e1e1e',
    marginTop: 22,
    marginBottom: 10,
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
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
    width: 170,
    
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
    backgroundColor: '#ffa500',
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
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