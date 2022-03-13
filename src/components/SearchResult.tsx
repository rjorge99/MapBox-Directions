import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';

export const SearchResult = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClicked = (place: Feature) => {
        const [lng, lat] = place.center;
        setActiveId(place.id);
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        });
    };

    const getRoute = (place: Feature) => {
        if (!userLocation) return;

        const [lng, lat] = place.center;
        getRouteBetweenPoints(userLocation, [lng, lat]);
    };

    if (isLoadingPlaces || places.length === 0) return <></>;

    return (
        <ul className='list-group mt-3 pointer'>
            {places.map(p => (
                <li
                    onClick={() => onPlaceClicked(p)}
                    key={p.id}
                    className={`list-group-item list-group-item-action ${
                        p.id === activeId && 'active'
                    }`}>
                    <h6>{p.text_es}</h6>
                    <p
                        style={{
                            fontSize: '12px'
                        }}>
                        {p.place_name}
                    </p>
                    <button
                        onClick={() => getRoute(p)}
                        className={`btn btn-outline-primary btn-sm ${
                            activeId === p.id
                                ? 'btn-outline-light'
                                : 'btn-outline-primary'
                        }`}>
                        Address
                    </button>
                </li>
            ))}
        </ul>
    );
};
