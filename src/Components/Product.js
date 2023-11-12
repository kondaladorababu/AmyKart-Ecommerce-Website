import React from 'react';
import '../styles/Product.css'
import { useStateValue } from '../Store/StateProvider';
import { truncate } from '../Store/reducer';

function Product({ id, title, price, image, rating }) {
    const { state, dispatch } = useStateValue();
    const { user } = state;

    const addToBasket = () => {
        // if user is not logged in
        if (!user) {
            dispatch({
                type: 'LOGIN_TO_ACCESS',
                openModal: true,
            });
        } else {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    rating: rating,
                },
            });
        }

    };

    return (
        <div className='product'>
            <div className="product_info">
                <p>{truncate(title, 60)}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_, index) => (
                            <p key={index}>⭐</p>
                        ))
                    }
                </div>
            </div>

            <div className="product_image">
                <img src={image} alt="" />
                <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Product
