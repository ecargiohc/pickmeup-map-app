import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Button from 'react-bootstrap/Button';
import './Map.css'


const Map = () => {

  const [center] = useState({lat: 0, lng: 0});
  // setCenter
  const [zoom] = useState(0);
  // setZoom

  const [ currentPosition, setCurrentPosition ] = useState({lat: null, lng: null});
  // use useEffect here:
  useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
              // console.log("Latitude is :", position.coords.latitude);
              // console.log("Longitude is :", position.coords.longitude);
            var currentPosition = {
                lat: position.coords.latitude, lng: position.coords.longitude
              };
                // console.log("currentPosition", currentPosition)
                // window.open(`https://maps.google.com?q=${current.lat}`+","+`${current.lng}`);
              setCurrentPosition(currentPosition);
            }
            );
        };
    });

    return (
        <div className="map-container">
          <Button 
            className="button"
            // onClick={() => handleClick()}
            onClick={() => setCurrentPosition(currentPosition)}
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