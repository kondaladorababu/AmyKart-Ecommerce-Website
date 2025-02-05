import React from 'react';
import './ProfileDropDownMenu.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import BookIcon from '@mui/icons-material/Book';
import { useNavigate } from 'react-router-dom';

const ProfileDropDownMenu = () => {

    const navigate = useNavigate();

    const handleOpenProfilePageNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="profileDropdown" >
            <div className="profileDropdown-list-item" onClick={() => handleOpenProfilePageNavigation('/profile')}>
                <AccountCircleIcon fontSize='14px' />
                <span>My Profile</span>
            </div>
            <div className="profileDropdown-list-item" onClick={() => handleOpenProfilePageNavigation('/orderHistory')}>
                <BookIcon fontSize='14px' />
                <span>My Orders</span>
            </div>
            <div className="profileDropdown-list-item">
                <LogoutIcon fontSize='14px' />
                <span>Logout</span>
            </div>
        </div>
    );
}

export default ProfileDropDownMenu;