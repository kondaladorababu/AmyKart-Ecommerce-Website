import React from 'react';
import './DropDown.css';
import { useState } from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }


    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'price', label: 'Price - Low to High' })}>Price - Low to High</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'price', label: 'Price - High to Low' })}>Price - High to Low</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'rating', label: 'Rating' })}>Rating</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'newest', label: 'Newest' })}>Newest</div>
                </div>
            )}
        </div>
    );
};

export default DropDown;