import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketSharp } from '@mui/icons-material';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';


function Header() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const openMoileNav = () => {
        if (openMobileNav === false) {

            setOpenMobileNav(true);
        } else {
            setOpenMobileNav(false);
        }
    }

    const closeMobileNav = () => {
        if (openMobileNav === false) {
            setOpenMobileNav(true);
        } else {
            setOpenMobileNav(false);
        }
    }

    const handleLogin = () => {
        if (user) {
            dispatch({
                type: 'SIGN_OUT',
                user: null,
            });
            auth.signOut()
                .then(() => {
                    navigate('/login');
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                });
        }
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
            {/* Logo on the Left:image */}
            <Link to='/HomePage'>
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"
                />
            </Link>

            {/* Search Box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>


            {/* 3 Links */}
            <div className={`header_nav ${openMobileNav ? 'mobile_nav' : ''}`}>
                <i className="fa-solid fa-xmark" onClick={closeMobileNav}></i>

                {/* 1st link */}
                <Link to={user == null ? '/login' : ''} className='header_link'>
                    <div onClick={handleLogin} className="header_option">
                        <span className='header_optionLineOne '>Hello <span className='user_name'>{user == null ? '' : user.email.split('@')[0]}</span></span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : ' Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className='header_link'>
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

        </nav>
    )
}

export default Header
