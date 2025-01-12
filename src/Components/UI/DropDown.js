import React, { useState, useEffect, useRef } from 'react';
import './DropDown.css';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : 'Select an option'}
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'price', label: 'Price - Low to High' })}>Price - Low to High</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'price', label: 'Price - High to Low' })}>Price - High to Low</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'rating', label: 'Rating' })}>Rating</div>
                    <div className="dropdown-list-item" onClick={() => handleSelectOption({ value: 'newest', label: 'Newest First' })}>Newest First</div>
                </div>
            )}
        </div>
    );
};

export default DropDown;