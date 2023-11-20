import React from 'react';
import '../styles/Product.css'
import { useStateValue } from '../Store/StateProvider';
import { truncate } from '../Store/reducer';
import { Link } from 'react-router-dom';


function Product({ id, category, title, price, description, image, rating }) {
    const { state, dispatch } = useStateValue();
    const { notifications } = state;

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
        <Link to='/productPage' key={id} state={{ productData: { id, category, title, price, description, image, rating } }} className='productPage_link' >

            <div className='product' >
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
                        <p className='product_description'>
                            {truncate(description, 95)}
                        </p>
                        <div className="product_rating">
                            {
                                Array(rating).fill().map((_, index) => (
                                    <p key={index}>⭐</p>
                                ))
                            }
                        </div>
                    </div>
                    <button className='add_product' onClick={addToBasket}>Add to basket</button>
                </div>
            </div>

        </Link >
    )
}

export default Product;
