import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token:
            'pk.eyJ1IjoicmpvcmdlOTkiLCJhIjoiY2t5N2x3cnFyMHE3NTMxcW11eDFjenA5NSJ9.oSlENNClDswIjTLvKfbVzw'
    }
});

export default searchApi;
