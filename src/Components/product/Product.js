import React from 'react';
import '../product/Product.css';
import { useStateValue } from '../../Store/StateProvider';
import { truncate } from '../../Store/reducer';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Product({ id, category, title, price, description, image, rating, isFilled }) {
    const { state, dispatch } = useStateValue();
    const { notifications } = state;

    let newNotification = null;

    const toggleFill = (e) => {
        e.preventDefault();
        if (isFilled) {
            dispatch({
                type: 'REMOVE_FROM_FAVORITES',
                item: {
                    id: id,
                },
            });

            newNotification = {
                id: notifications.length + 1,
                message: 'Removed from Favorites',
            };
        } else {
            dispatch({
                type: 'ADD_TO_FAVORITES',
                item: {
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    rating: rating,
                    category: category,
                    description: description,
                    isFilled: true,
                },
            });

            newNotification = {
                id: notifications.length + 1,
                message: 'Added to Favorites',
            };
        }

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

    const addToBasket = (e) => {
        e.preventDefault(); //to stop activating link navigation when clicked add to cart button

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
                quantity: 1,
            },
        });

        const newNotification = {
            id: notifications.length + 1,
            message: 'Added to Basket',
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
        <Link to='/productPage' state={{ productData: { id, category, title, price, description, image, rating } }} className='productPage_link'>
            <div className='product'>
                <div className="fav" onClick={toggleFill}>
                    {isFilled ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon className='favorite-icon' />}
                </div>
                <div className="product_image">
                    <img src={image} alt="" />
                </div>
                <div className="product_info">
                    <div className="product_details">
                        <p className='product_category'>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                        <p className='product_title'>{truncate(title, 30)}</p>
                        <p className='product__price'>
                            <small>₹</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="product_rating">
                            {Array(rating).fill().map((_, index) => (
                                <p key={index}>⭐</p>
                            ))}
                        </div>
                    </div>
                    <button className='add_product' onClick={addToBasket}>Add to Compare</button>
                </div>
            </div>
        </Link>
    );
}

export default Product;