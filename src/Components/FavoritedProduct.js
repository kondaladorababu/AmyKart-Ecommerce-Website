import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/FavoritedProduct.css';
import { truncate } from '../Store/reducer';
import { useStateValue } from '../Store/StateProvider';

function FavoritedProduct(props) {
    const { state, dispatch } = useStateValue();
    const { notifications } = state;

    const handleRemoveFromFav = (e) => {
        e.preventDefault();

        dispatch({
            type: 'Remove_FROM_FAVORITES',
            item: {
                id: props.id,
            },
        });

        const newNotification = {
            id: notifications.length + 1,
            message: 'Removed from Favorites',
        };

        dispatch({
            type: 'ADD_NOTIFICATION',
            notific: newNotification,
        });

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION',
                idOfNotific: newNotification.id,
            });
        }, 3000);
    };
    return (
        <div className="favorite-container">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="favorited-info">
                <div className="info-left">
                    <p className='favorited-price'>{`₹: ${props.price}`}</p>
                    <h5 className='favorited-title'>{truncate(props.title, 55)}</h5>
                    <div className="favorited-rating">
                        {
                            Array(props.rating).fill().map((_, index) => (
                                <p key={index}>⭐</p>
                            ))
                        }
                    </div>
                </div>
                <div className="info-right">
                    <div className="favorite" onClick={handleRemoveFromFav}>
                        {props.isFilled && <FavoriteIcon />}
                        {!props.isFilled && <FavoriteBorderOutlinedIcon className='favorite-icon' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritedProduct
