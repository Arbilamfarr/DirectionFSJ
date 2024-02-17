import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View ,TouchableOpacity,Image} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';

const GOOGLE_MAPS_APIKEY = "apiKey_google_map";

export default function Map2(props) {
  
 const [userLocation, setUserLocation] = useState(null);
const latitude=props.destination.latitude;
const longitude=props.destination.longtitude;
const description=props.description
const title=props.title
const [sattelite,setSattelite]=useState(false)

  const [region, setRegion] = useState({
    latitude: 33.22573437343154,
    longitude:  -8.48609153269298,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Optionally, you can set the region to the user's location
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    };

    fetchUserLocation();
    const intervalId = setInterval(() => {
      fetchUserLocation()
    }, 10000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        minZoomLevel={17}
        maxZoomLevel={20}
        mapType={sattelite==true?'hybrid':'standard'}
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true} 
        loadingEnabled 
      > 
      { latitude!==0 && longitude!==0 && (
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={title}
          description={description}
        />)}
        {userLocation && latitude!==0 && longitude!==0 && (
          <MapViewDirections
            origin={userLocation} // Use live user location as the origin
            destination={{
              latitude: latitude,
              longitude: longitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#00c8fa"
            mode="WALKING"
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.buttonSattelite} onPress={()=>{setSattelite(!sattelite)
      }}>
        <Image source={require("./../assets/images/standard.png")} style={[styles.imageSattelite,{display:!sattelite?'none':null}]}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSattelite} onPress={()=>{setSattelite(!sattelite)
      }}>
        <Image source={require("./../assets/images/satellite.png")} style={[styles.imageSattelite,{display:sattelite?'none':null}]}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  }, 
  buttonSattelite:{
    position:'absolute',
   margin:5,
    backgroundColor:"white",
    height:50,
    borderRadius:12,
   

  },
  imageSattelite:{
    width:50,
    height:50,
    borderRadius:12,
    backfaceVisibility:'hidden'
  
  }
});