/*eslint import/no-webpack-loader-syntax: off*/
import { useContext, useLayoutEffect, useRef } from 'react';

import { Loading } from './';
//@ts-ignore
import { Map } from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapContext, PlacesContext } from '../context';

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null);
    const { setMap } = useContext(MapContext);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation,
                zoom: 14
            });

            setMap(map);
        }
    }, [isLoading]);

    if (isLoading) return <Loading />;

    return (
        <div
            ref={mapDiv}
            style={{
                height: '100vh'
            }}></div>
    );
};
