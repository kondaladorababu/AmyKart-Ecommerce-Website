import React, { useContext, useEffect, useState, useRef } from 'react';
import '../common/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../../Store/StateProvider';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ProfileDropDownMenu from '../profile/ProfileDropDownMenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UiContext from '../../Store/UiContextProvider';

function Header() {
    const { state, dispatch } = useStateValue();
    const { products, basket } = state;

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [mobileNavState, setMobileNavState] = useState('mobile_nav_close');
    const [userSearchData, setUserSearchData] = useState('');

    const { openProfileDropDown, handleOpenProfileDropDown } = useContext(UiContext);

    const dropdownRef = useRef(null);

    // Handlers
    const openMobileNavHandler = () => {
        setMobileNavState('mobile_nav');
    }

    const closeMobileNavHandler = () => {
        setMobileNavState('mobile_nav_close');
    }

    const userInputSearch = (e) => {
        setUserSearchData(e.target.value);
    }

    const getUserSearchData = () => {
        const filteredProducts = products.filter((item) =>
            item.title.toLowerCase().includes(userSearchData.toLowerCase()) || item.description.toLowerCase().includes(userSearchData.toLowerCase())
        );

        dispatch({
            type: 'SEARCH_RESULTS',
            data: filteredProducts,
        });
    }

    const refreshPage = () => {
        setUserSearchData('');
        dispatch({
            type: 'SEARCH_RESULTS',
            data: products,
        });
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            handleOpenProfileDropDown(false);
        }
    };

    // Effects
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (basket.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [basket.length]);

    return (
        <nav className='header'>
            <Link to='/HomePage'>
                <div className="header_logo" onClick={refreshPage}>
                    <StorefrontIcon className='logo' />
                    <h3>AmyKart</h3>
                </div>
            </Link>

            {/* Mobile search Bar */}
            <div className='header_search mobileHeaderSearch'>
                <input value={userSearchData} onChange={userInputSearch} type="text" className="header_searchInput" placeholder='Search for products' />
                <SearchIcon onClick={getUserSearchData} className='header_searchIcon' />
            </div>

            {/* Mobile Basket */}
            <Link to='/checkout' className='header_link headerBasketMobile_link'>
                <div className={`header_optionBasket headeMobile_basketActive ${btnIsHighlighted ? 'bump' : ''}`}>
                    <ShoppingCartIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                </div>
            </Link>

            <div className={`${mobileNavState === 'mobile_nav' ? 'shadow' : ''}`}></div>

            {/* MAIN NAV BAR DESKTOP 2 Links */}
            <div className={`header_nav ${mobileNavState}`}>
                {/* hide this header search in in mobile view oresle it comes inside hamburger */}
                <div className='header_search headerSearchInHamburger'>
                    <input value={userSearchData} onChange={userInputSearch} type="text" className="header_searchInput" placeholder='Search for products' />
                    <SearchIcon onClick={getUserSearchData} className='header_searchIcon' />
                </div>

                <i className="fa-solid fa-xmark" onClick={closeMobileNavHandler}></i>

                {/* hide favorite icon in mobile nav Bar */}
                <Link to='/favorites' className='header_link'>
                    <div className={`header_option header_optionFavorite`}>
                        <span className='header_names'>Favorites</span>
                        <FavoriteIcon fontSize='18px' />
                        {mobileNavState === 'mobile_nav' && <span className='header_optionLineTwo'>Favorites</span>}
                    </div>
                </Link>

                {/* HIDING THIS IN MOBILE NAV CAUSE OTHER BASKET FOR MOBILE MAIN BAR IS DISPLAYED */}
                <Link to='/checkout' className='header_link mobileNavBarBasket_Link'>
                    <div className={`header_optionBasket`}>
                        <span className='header_names'>Cart</span>
                        <ShoppingCartIcon fontSize='16px' className={`${btnIsHighlighted ? 'bump' : ''}`} />
                        <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                    </div>
                </Link>

                <div className='header_link'>
                    <div className="header_option" onClick={() => { handleOpenProfileDropDown(!openProfileDropDown) }} ref={dropdownRef}>
                        <div className='header_account'>
                            <span className='header_names'>Account</span>
                            <PersonIcon fontSize='20px' />
                        </div>
                        <div className='header_profileDropDown'>
                            {openProfileDropDown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                        {openProfileDropDown && <ProfileDropDownMenu />}
                    </div>
                </div>
            </div>

            <i className="fa-solid fa-bars" onClick={openMobileNavHandler}></i>
        </nav>
    )
}

export default Header;