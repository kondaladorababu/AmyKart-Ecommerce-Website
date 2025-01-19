import React from 'react';
import './Path.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate, useLocation } from 'react-router-dom';
import DropDown from '../UI/DropDown';
import { useState } from 'react';
import { useStateValue } from '../../Store/StateProvider';

function Path({ className, currentCategory }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [showSort, setShowSort] = useState(className !== 'productPage_right_header');

    const { state } = useStateValue();
    const { finalProducts } = state;


    const handleHomeNavigation = () => {
        navigate('/HomePage');
    }

    const handleNavigation = (path) => {
        console.log(path);
        navigate(path);
    }

    // Generate breadcrumb path based on the current URL path
    const pathSegments = location.pathname.split('/').filter(segment => segment);

    const breadcrumbPath = ['Home', ...pathSegments];

    return (
        <div className={`product_results_header ${className}`}>
            <div className='path-left'>
                <div className='path'>
                    {breadcrumbPath.map((segment, index) => (
                        <div key={index} className="breadcrumb-segment">
                            {index === 0 ? (
                                <span onClick={handleHomeNavigation}>{segment}</span>
                            ) : (
                                <>
                                    <ArrowForwardIosIcon style={{ fontSize: '10px' }} />
                                    <span onClick={() => handleNavigation(`/${pathSegments.slice(0, index).join('/')}`)}>
                                        {segment}
                                    </span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className='product_results_header_info'>
                    <span className='product_results_header_info_title'>{currentCategory.toUpperCase()} Products : </span>
                    <span>{finalProducts.length} Results</span>
                </div>
            </div>

            <div className='path-right'>
                {showSort &&
                    <div className='product_results_header_sort'>
                        <span>Sort By : </span>
                        <DropDown></DropDown>
                    </div>
                }
            </div>
        </div>
    );
}

export default Path;