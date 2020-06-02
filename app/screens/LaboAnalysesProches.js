
import React, {useState, Component, useEffect} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default function LaboAnalyseProche({ navigation }){

  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const [CurrentPosition, setCurrentPosition] = useState(initialState)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      //alert(JSON.stringify(position))
      const {latitude,longitude}=position.coords;
      setCurrentPosition({
        ...CurrentPosition,
        latitude,
        longitude,
      })
    },
      error => alert(error.message),
      { timeout:20000,maximumAge:1000 }

    )

   
  }, [])


  return CurrentPosition.latitude ? (


    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={CurrentPosition}
    >
     
    </MapView>



  ) : <ActivityIndicator style={{ flex: 1 }} animating size='large' />
}
