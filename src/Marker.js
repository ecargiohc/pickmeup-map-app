import React from 'react';
import './Marker.css';
import Card from 'react-bootstrap/Card';

const Marker = (props) => {
    const { name, id, lat, lng } = props;
    return (
      <div>
        <div
          key={id}
          className="pin bounce"
          title={name}
          onClick={()=>window.open(`https://maps.google.com?q=${lat}`+","+`${lng}`)}
        />
        <div className="pulse" />
        <Card>
            <Card.Body>
              <Card.Text>
              <b>Latitude: {lat} Longitude: {lng}</b>
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    );
  };

  export default Marker;