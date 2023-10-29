import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketSharp } from '@mui/icons-material';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';


function Header() {
    const [{ basket, user }] = useStateValue();
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);


    const handleLogin = () => {
        if (user) {
            auth.signOut();
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
            <Link to='/'>
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
            <div className="header_nav">

                {/* 1st link */}
                <Link to={!user && '/login'} className='header_link'>
                    <div onClick={handleLogin} className="header_option">
                        <span className='header_optionLineOne'>Hello {user == null ? '' : user.email.split('@')[0]}</span>
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
                <Link to='/checkout' className='header_link'>
                    <div className={`header_optionBasket ${btnIsHighlighted ? 'bump' : ''}`}>
                        {/* shopping basket icon */}
                        <ShoppingBasketSharp />
                        <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                        {/* No itemsicon */}
                    </div>
                </Link>
            </div>
            {/* \Basket Icon with count */}
        </nav>
    )
}

export default Header
