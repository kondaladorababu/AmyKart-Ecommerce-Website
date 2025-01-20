import React from 'react';
import './ProfileDropDownMenu.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import BookIcon from '@mui/icons-material/Book';
import { useNavigate } from 'react-router-dom';

const ProfileDropDownMenu = () => {

    const navigate = useNavigate();

    const handleOpenProfilePage = () => {
        navigate('/profile');
    }

    return (
        <div className="profileDropdown" >
            <div className="profileDropdown-list-item" onClick={handleOpenProfilePage}>
                <AccountCircleIcon fontSize='14px' />
                <span>My Profile</span>
            </div>
            <div className="profileDropdown-list-item">
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