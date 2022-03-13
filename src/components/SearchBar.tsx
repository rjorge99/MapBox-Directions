import { ChangeEvent, useContext, useRef } from 'react';
import { SearchResult } from '.';
import { MapContext, PlacesContext } from '../context';

export const SearchBar = () => {
    const { searchPlacesByTerm } = useContext(PlacesContext);
    const { clearRoute } = useContext(MapContext);
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            clearRoute();
            searchPlacesByTerm(event.target.value);
        }, 500);
    };

    return (
        <div className='search-container'>
            <input
                type='text'
                placeholder='Search place...'
                className='form-control'
                onChange={onQueryChanged}
            />
            <SearchResult />
        </div>
    );
};
