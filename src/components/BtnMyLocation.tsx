import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
    const { isMapReady, map } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const onClick = () => {
        if (!isMapReady) throw new Error('Map is not ready');
        if (!userLocation) throw new Error('No location');

        map?.flyTo({
            zoom: 14,
            center: userLocation
        });
    };

    return (
        <div
            className='btn btn-primary'
            onClick={onClick}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                zIndex: 999
            }}>
            My location
        </div>
    );
};
