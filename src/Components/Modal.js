import React from 'react';
import '../styles/Modal.css';

function Modal({ onClose, info }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{info}</p>
                <button className='close_modal' onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
