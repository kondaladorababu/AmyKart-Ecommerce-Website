import React, { useState } from "react";
import "./Filters.css";
import Expander from "../UI/Expander";

const Filters = ({ filters }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    console.log(selectedFilters);

    const handleFilterChange = (filterCategory, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterCategory]: value,
        }));
    };


    const [expandedFilters, setExpandedFilters] = useState({});

    const handleToggle = (filterId) => {
        setExpandedFilters((prevState) => ({
            ...prevState,
            [filterId]: !prevState[filterId],
        }));
    };
    const hasSelectedFilters = Object.keys(selectedFilters).length > 0;


    return (
        <div className="filters-container">
            <div className="filters-title">
                <p>Filters</p>
                {hasSelectedFilters && <p style={{ color: '#2874f0', fontSize: '1rem' }} onClick={() => { setSelectedFilters([]) }}>Clear All</p>}
            </div>
            <section className="filters-selected">

                {/* <ul>
                    {Object.entries(selectedFilters).map(([key, value]) => (
                        <li key={key}>
                            <span>{key}:</span>
                            <span>{Array.isArray(value) ? value.join(", ") : value}</span>
                        </li>
                    ))}
                </ul> */}
            </section>
            <section className="filters-list">
                <p>Price </p>
                {filters.map((filterType) => (
                    <div key={filterType.id}>
                        {filterType.type === "range" ? (
                            <div className="price-range-filter">
                                <input
                                    type="range"
                                    min={filterType.min}
                                    max={filterType.max}
                                    value={selectedFilters[filterType.id] || filterType.min}
                                    onChange={(e) =>
                                        handleFilterChange(filterType.id, e.target.value)
                                    }
                                />
                                <span>Up to ₹{selectedFilters[filterType.id] || filterType.min}</span>
                            </div>
                        ) : (
                            <div>
                                {/* Add a label to click and toggle the list */}
                                <Expander filterType={filterType} selectedFilters={selectedFilters} expandedFilters={expandedFilters} handleToggle={handleToggle} />

                                {/* Conditionally render the list based on isExpanded state */}
                                {expandedFilters[filterType.id] && (
                                    <ul >
                                        {filterType.options.map((option) => (
                                            <li key={option}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFilters[filterType.id]?.includes(option) || false}

                                                    onChange={(e) =>
                                                        handleFilterChange(
                                                            filterType.id,
                                                            e.target.checked
                                                                ? [
                                                                    ...(selectedFilters[filterType.id] || []),
                                                                    option,
                                                                ]
                                                                : selectedFilters[filterType.id].filter(
                                                                    (val) => val !== option
                                                                )
                                                        )
                                                    }
                                                />
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Filters;
