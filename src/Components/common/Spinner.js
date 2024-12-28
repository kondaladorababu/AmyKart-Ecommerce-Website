import React from 'react';
import '../common/Spinner.css';

function Spinner() {
    return (
        <div className='spinner'>
            <img src="https://i.gifer.com/ZKZg.gif" alt="" />
            <p>Loading Products.... Please wait</p>
        </div>
    )
}

export default Spinner
