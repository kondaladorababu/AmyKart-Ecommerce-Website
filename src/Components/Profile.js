import React from 'react';
import '../styles/Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5KENnAJ_Vfx8W3gzM_U79r3zNwppNXCknA&usqp=CAU" alt="Background photo" />
                </div>
                <div className="profile-main">
                    <div className="profile-image">
                        <AccountCircleIcon className='profile-icon' />
                        <p>Dora Babu</p>
                        <p>Hyderabad</p>
                    </div>
                    <p className='profile-details-header'>Profile Details</p>
                    <div className="profile-details">
                        <table border='0'>
                            <tr>
                                <td>Full Name</td>
                                <td className='user_info'>Not Set</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td className='user_info'>Not Set</td>
                            </tr>
                            <tr>
                                <td>E-Mail</td>
                                <td className='user_info'>Not Set</td>
                            </tr>
                            <tr>
                                <td>Phone Number </td>
                                <td className='user_info'>Not Set</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="profile-footer">
                    <button className='sign-out'>Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
