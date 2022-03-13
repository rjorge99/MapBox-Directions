import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:
            'pk.eyJ1IjoicmpvcmdlOTkiLCJhIjoiY2t5N2x3cnFyMHE3NTMxcW11eDFjenA5NSJ9.oSlENNClDswIjTLvKfbVzw'
    }
});

export default directionsApi;
