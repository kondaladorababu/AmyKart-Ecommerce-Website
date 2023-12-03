import React from 'react';
import '../styles/Favorites.css';
import { useStateValue } from '../Store/StateProvider';


function Favorites() {
    const { state } = useStateValue();
    const { favorited, basket } = state;

    return (
        <div className='favorites'>
            {favorited.length === 0 && <p> Please Add Items to see in Favorites</p>}
            {basket && <h1>here</h1>}
        </div>
    )
}

export default Favorites;
