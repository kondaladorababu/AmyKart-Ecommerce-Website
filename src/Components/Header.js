import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketSharp } from '@mui/icons-material';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';


function Header() {
    // const navigate = useNavigate();
    const { state, dispatch } = useStateValue();
    const { products, basket, user, totalPrice } = state;

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

    }, [totalPrice]);


    return (
        <nav className='header'>
            {/* Logo on the Left:image */}
            <Link to='/HomePage'>
                <img
                    className="header_logo" onClick={refreshPage}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"
                />
            </Link>

            {/* Search Box */}
            <div className='header_search'>
                <input value={userSearchData} onChange={userInputSearch} type="text" className="header_searchInput" />
                <SearchIcon onClick={getUserSearchData} className='header_searchIcon' />
            </div>

            <div className={`${openMobileNav === 'mobile_nav' ? 'shadow' : ''}`}></div>

            {/* MAIN NAV BAR DESKTOP 3  Links */}
            <div className={`header_nav ${openMobileNav}`}>

                <i className="fa-solid fa-xmark" onClick={closeMobileNav}></i>

                {/* 1st link */}
                <Link to={user == null ? '/login' : ''} className='header_link'>
                    <div onClick={handleLogin} className="header_option">
                        <span className='header_optionLineOne '>Hello <span className='user_name'>{user == null ? 'USER' : user.email.split('@')[0]}</span></span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : ' Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/HomePage' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='https://netflix-clone-project-b1eac.web.app/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className='header_link mobileNavBarBasket_Link'>
                    <div className={`header_optionBasket ${btnIsHighlighted ? 'bump' : ''}`}>
                        {/* shopping basket icon */}
                        <ShoppingBasketSharp />
                        <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                        {/* No itemsicon */}
                    </div>
                </Link>

            </div>

            <Link to='/checkout' className='header_link headerBasketMobile_link'>
                <div className={`header_optionBasket headeMobile_basketActive ${btnIsHighlighted ? 'bump' : ''}`}>
                    {/* shopping basket icon */}
                    <ShoppingBasketSharp />
                    <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                    {/* No itemsicon */}
                </div>
            </Link>

            <i className="fa-solid fa-bars" onClick={openMoileNav}></i>

        </nav >
    )
}

export default Header
