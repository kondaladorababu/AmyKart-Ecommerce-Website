import React from 'react';
import '../styles/CheckOutProduct.css'
import { useStateValue } from '../Store/StateProvider';

function CheckOutProduct({ id, title, price, image, rating }) {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="chekoutProduct_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>

    )
}

export default CheckOutProduct
