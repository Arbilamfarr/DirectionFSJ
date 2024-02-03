import React, {useEffect, useState}from 'react';
import { View, StyleSheet,Text,TouchableOpacity, Image} from 'react-native';
import MapView, { Marker ,Polygon,Polyline} from 'react-native-maps';
import { Button } from 'react-native-paper';



const Map = (props) => {
  const latitude=props.destination.latitude;
  const longtitude=props.destination.longtitude;
 const [sattelite,setSattelite]=useState(false)
 const image="./../assets/images/standard.png"
  // const [image,setImage]=useState("./../assets/images/standard.png");

  return (
    <View style={styles.container}>
    <View style={styles.mapView}>

    <MapView
        style={styles.map}
        initialRegion={{
          latitude:latitude,
           longitude: longtitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          
        }}
        minZoomLevel={15}
        maxZoomLevel={20}
        mapType={sattelite==true?'hybrid':'standard'}
       showsUserLocation={true}
       showsMyLocationButton={true}
      
      >
        <Marker
          coordinate={{ latitude:latitude, longitude:longtitude }}
          title="fsj"
          description="faculté science el jadida"
        />
          
      </MapView>
     
      </View>
    
      <TouchableOpacity style={styles.buttonSattelite} onPress={()=>{setSattelite(!sattelite)
      }}>
        <Image source={require("./../assets/images/standard.png")} style={styles.imageSattelite}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSattelite} onPress={()=>{setSattelite(!sattelite)
      }}>
        <Image source={require("./../assets/images/satellite.png")} style={styles.imageSattelite}></Image>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapView:{
    flex:1,
    width:"100%",
  
  },
  description:{
    
    width:"100%",

  },
  buttonSattelite:{
    position:'absolute',
    marginBottom:2,
    marginRight:2,
    backgroundColor:"white",
    height:80,
    borderRadius:12,
    backfaceVisibility:'hidden'
 

  },
  imageSattelite:{
    width:80,
    height:80,
    borderRadius:12,
    backfaceVisibility:'hidden'
  
  }
});

export default Map;
