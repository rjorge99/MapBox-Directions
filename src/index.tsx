import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) {
    alert('Tu navegador no tiene acceso a Geolocation');
    throw new Error('Tu navegador no tiene acceso a Geolocation');
}

mapboxgl.accessToken =
    'pk.eyJ1IjoicmpvcmdlOTkiLCJhIjoiY2t5N2x3cnFyMHE3NTMxcW11eDFjenA5NSJ9.oSlENNClDswIjTLvKfbVzw';
ReactDOM.render(<MapsApp />, document.getElementById('root'));
