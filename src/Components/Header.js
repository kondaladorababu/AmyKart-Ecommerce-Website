import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
    const { state, dispatch } = useStateValue();
    const { products, basket, user } = state;

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState('mobile_nav_close');
    const [userSearchData, setuserSearchData] = useState('');

    const openMoileNav = () => {
        setOpenMobileNav('mobile_nav');
    }

    const closeMobileNav = () => {
        setOpenMobileNav('mobile_nav_close');
    }

    const handleLogin = () => {
        if (user) {

            auth.signOut()
                .then(() => {
                    //clear the basket & close the mobile nav bar
                    dispatch({
                        type: 'CLEAR_BASKET',
                    });
                    setOpenMobileNav('mobile_nav_close');
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                });
        }
    }

    const userInputSearch = (e) => {
        setuserSearchData(e.target.value);
    }

    //get the user searched data from products object every time a new search is entered
    const getUserSearchData = () => {
        const filteredProducts = products.filter((item) =>
            item.title.toLowerCase().includes(userSearchData.toLowerCase()) || item.description.toLowerCase().includes(userSearchData.toLowerCase())
        );

        dispatch({
            type: 'SEARCH_RESULTS',
            data: filteredProducts,
        });
    }

    // If clicked on amazon logo set the finalproducts to products
    const refreshPage = () => {
        dispatch({
            type: 'SET_DATA',
            data: products,
        });
        setuserSearchData('');
    }

    //Make the cart bump when added items to cart
    //if basket len is changing which means item is added to cart
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

            <div className='header_search mobileHeaderSearch'>
                <input value={userSearchData} onChange={userInputSearch} type="text" className="header_searchInput" placeholder='Search for products' />
                <SearchIcon onClick={getUserSearchData} className='header_searchIcon' />
            </div>

            <Link to='/checkout' className='header_link headerBasketMobile_link'>
                <div className={`header_optionBasket headeMobile_basketActive ${btnIsHighlighted ? 'bump' : ''}`}>
                    <ShoppingCartIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                </div>
            </Link>

            <div className={`${openMobileNav === 'mobile_nav' ? 'shadow' : ''}`}></div>

            {/* MAIN NAV BAR DESKTOP 2 Links */}
            <div className={`header_nav ${openMobileNav}`}>

                {/* hide this header search in in mobile view oresle it comes inside hamburger */}
                <div className='header_search headerSearchInHamburger'>
                    <input value={userSearchData} onChange={userInputSearch} type="text" className="header_searchInput" placeholder='Search for products' />
                    <SearchIcon onClick={getUserSearchData} className='header_searchIcon' />
                </div>

                <i className="fa-solid fa-xmark" onClick={closeMobileNav}></i>

                {/* hide favorite icon in mobile nav Bar */}
                <Link to='/favorites' className='header_link mobileNavBarFav_Link'>
                    <div className={`header_optionFavorite ${btnIsHighlighted ? 'bump' : ''}`}>
                        <FavoriteIcon />
                    </div>
                </Link>

                <Link to='/checkout' className='header_link mobileNavBarBasket_Link'>
                    <div className={`header_optionBasket ${btnIsHighlighted ? 'bump' : ''}`}>
                        <ShoppingCartIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                    </div>
                </Link>

                <Link to='' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Account</span>
                    </div>
                </Link>

            </div>


            <i className="fa-solid fa-bars" onClick={openMoileNav}></i>
        </nav >

    )
}

export default Header
