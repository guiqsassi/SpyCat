import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useDispatch } from "react-redux"
import PlaceMarkerOnClick from './PlaceMarkerOnClick';
import axios from 'axios';
const Map = (props) => {
    const dispatch = useDispatch()
    const [position, setPosition] = useState([-27.548258, -48.498994])
    


   function FindUser() {
    const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
          dispatch({
        type: "newPosition",
        payload:{
            position: e.latlng
        }
    })
    },
  }) 
return 
} 

    return ( 
        <MapContainer
        id="map"
        className="mapAdd"
        center={props.position? props.position: position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {props.findUser? 
        <FindUser></FindUser>:null   
    }
       {props.placeMarker? 
        <PlaceMarkerOnClick></PlaceMarkerOnClick>:null   
    }
      </MapContainer>
     );
}
 
export default Map;