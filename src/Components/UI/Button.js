import React from 'react';
import '../UI/Button.css';

function Button(props) {
    return (
        <button className='the-button'{...props}>
            {props.children}
        </button>
    )
}

export default Button
