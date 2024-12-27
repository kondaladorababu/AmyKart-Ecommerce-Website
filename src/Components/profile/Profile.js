import React from 'react';
import '../../styles/Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStateValue } from '../../Store/StateProvider';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { state } = useStateValue();
    const user = state.user;
    const userName = user !== null ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1) : 'user';
    const userEmail = user !== null ? user.email : 'NOT SET';

    const navigate = useNavigate();

    const handleUserAuth = () => {
        navigate('/login');
    }

    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5KENnAJ_Vfx8W3gzM_U79r3zNwppNXCknA&usqp=CAU" alt="Background_photo" />
                </div>
                <div className="profile-main">
                    <div className="profile-image">
                        <AccountCircleIcon className='profile-icon' />
                        <p>{userName}</p>
                        <p>Hyderabad</p>
                    </div>
                    <p className='profile-details-header'>Profile Details</p>
                    <div className="profile-details">
                        <table border='0'>
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td className='user_info'>{userName}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td className='user_info'>Not Set</td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td className='user_info'>{userEmail}</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td className='user_info'>Not Set</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="profile-footer">
                    <button onClick={handleUserAuth} className='sign-out'>{user === null ? 'Sign In' : 'Sign Out'}</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
