import React from 'react';
import './CheckBoxes.css';


function CheckBoxes({ filterType, selectedFilters, handleFilterChange }) {
    // let filterType = [
    //     { id: "price", label: "Price", type: "range", min: 1000, max: 50000 },
    //     { id: "brand", label: "Brand", type: "checkbox", options: ["Apple", "Samsung", "Sony"] },
    //     { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
    //     { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
    // ];

    return (
        <form className="my-form">
            {filterType.options.map((checkBoxName) => (
                <div key={checkBoxName}>
                    <input type="checkbox" id={checkBoxName}
                        checked={selectedFilters[filterType.id]?.includes(checkBoxName) || false}
                        onChange={(e) => {
                            const newSelectedFilters = e.target.checked
                                ? [...(selectedFilters[filterType.id] || []), checkBoxName]
                                : selectedFilters[filterType.id].filter((val) => val !== checkBoxName);
                            handleFilterChange(filterType.id, newSelectedFilters);
                        }}
                    />
                    < label htmlFor={checkBoxName}>{checkBoxName}</label>
                </div>
            ))}
        </form>
    )
}

export default CheckBoxes;