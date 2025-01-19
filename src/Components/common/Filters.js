import React, { useState } from "react";
import "./Filters.css";
import Expander from "../UI/Expander";
import CheckBoxes from "../UI/CheckBoxes";

const Filters = ({ filters }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (filterCategory, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterCategory]: value,
        }));

        //if the vale is empty, remove the filterCategory object completely
        if (value.length === 0) {
            const { [filterCategory]: removedFilter, ...otherFilters } = selectedFilters;
            setSelectedFilters(otherFilters);
        }
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
            <div className="filters-header">
                <p>Filters</p>
                {hasSelectedFilters && <p style={{ color: '#2874f0', fontSize: '1rem' }} onClick={() => { setSelectedFilters([]) }}>Clear All</p>}
            </div>

            {/* <section className="filters-selected">

            </section> */}

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
                                {expandedFilters[filterType.id] &&
                                    <CheckBoxes filterType={filterType}
                                        selectedFilters={selectedFilters}
                                        handleFilterChange={handleFilterChange}
                                    />}
                            </div>
                        )}
                    </div>

                ))}
            </section>

            <div className="filters-apply">
                <button className="apply-button" style={{ verticalAlign: 'middle' }} disabled={true}>
                    <span>Apply</span>
                </button>
            </div>
        </div>
    );
};

export default Filters;
