import React from 'react';
import '../../styles/Notification.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useStateValue } from '../../Store/StateProvider';

function Notification() {
    const { state } = useStateValue();
    const { notifications } = state;

    return (
        <div className='notification_container'>
            <div className="notification_children">
                {notifications.map((notification) => (
                    <div className="notification" key={notification.id}>
                        <CheckCircleIcon className='CheckIcon' />
                        <h5 className='notication_message'>{notification.message}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification;
