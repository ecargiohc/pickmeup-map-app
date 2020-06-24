import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Button from 'react-bootstrap/Button';
import './Map.css'


const Map = () => {

  const [center, setCenter] = useState({lat: 0, lng: 0});
  
  const [zoom, setZoom] = useState(0);

  const [ currentPosition, setCurrentPosition ] = useState({lat: null, lng: null});
  
  const handleClick = () => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
            var currentPosition = {
                lat: position.coords.latitude, lng: position.coords.longitude
              };
                console.log("currentPosition", currentPosition)
                // window.open(`https://maps.google.com?q=${current.lat}`+","+`${current.lng}`);
              setCurrentPosition(currentPosition);
            }
            );
        };
    };

    return (
        <div className="map-container">
          <Button 
            className="button"
            onClick={() => handleClick()}
          > 
            <h2>Find Me!</h2>
          </Button>

          <GoogleMapReact
            bootstrapURLKeys={{ key: `AIzaSyC5iNRIfQ_azqKM7I4fSgu5I9-xPqIqEw0` }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
            <Marker
              lat={currentPosition.lat}
              lng={currentPosition.lng}
              name="CLICK FOR DIRECTIONS!"
            />
        </GoogleMapReact>
      </div>
    );
}

export default Map;