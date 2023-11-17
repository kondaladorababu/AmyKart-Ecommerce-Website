import React, { useState } from 'react';
import '../styles/CheckOutProduct.css'
import { useStateValue } from '../Store/StateProvider';
import { truncate } from '../Store/reducer';
import QuantityButton from './QuantityButton';

function CheckOutProduct({ id, title, price, image, quantity }) {
    const { dispatch } = useStateValue();
    const [count, setCount] = useState(quantity);

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <div className="image">
                <img className="checkoutProduct_image" src={image} alt="" />
            </div>

            <div className='checkoutProduct_info'>
                <div className="one">
                    <p className='checkoutProduct_title'>{truncate(title, 55)}</p>
                    <p className='product__price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className="chekoutProduct_quantity">
                    <div className="quantity_content">
                        <small className='quantity_times'>{`QTY : `}</small>
                    </div>
                    <QuantityButton count={count} setCount={setCount} product={{ id, title, price, image, quantity }} />
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div >

    )
}

export default CheckOutProduct
