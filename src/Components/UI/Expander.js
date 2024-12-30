import React from 'react'
import './Expander.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Expander({ filterType, selectedFilters, expandedFilters, handleToggle }) {
    return (
        <div className='expander-container' onClick={() => handleToggle(filterType.id)}  >
            <span>{filterType.label}</span>

            <div className='container-right'>
                {selectedFilters[filterType.id] &&
                    selectedFilters[filterType.id].length > 0 && (
                        <span style={{ color: '#2874f0' }} > [{selectedFilters[filterType.id].length}]</span>
                    )}

                <ExpandMoreIcon style={{ transform: expandedFilters[filterType.id] ? "rotate(180deg)" : "", marginLeft: '5px', paddingTop: '5px' }} />
            </div>
        </div>
    );
}


export default Expander