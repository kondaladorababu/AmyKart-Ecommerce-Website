import React from 'react';
import '../styles/QuantityButton.css';
import { useStateValue } from '../Store/StateProvider';

function QuantityButton(props) {
    const { dispatch } = useStateValue();

    const handleQuantityPriceIncrease = () => {
        props.setCount(props.count + 1);
        dispatch({
            type: 'INCREASE_PRODUCT_PRICE',
            id: props.product.id,
            price: props.product.price,
        });

    }

    const handleQuantityPriceDecrease = () => {
        if (props.count === 1) {
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: props.product.id,
            });
        } else {
            props.setCount(props.count - 1);
            dispatch({
                type: 'DECREASE_PRODUCT_PRICE',
                id: props.product.id,
                price: props.product.price,
            });
        }
    }

    return (
        <div className="quantity-container">
            <button onClick={handleQuantityPriceDecrease} className="quantity-button quantity_minus" id="decrease">-</button>
            <input value={props.count} readOnly className="quantity-input" id="quantity" type="text" />
            <button onClick={handleQuantityPriceIncrease} className="quantity-button quantity_plus" id="increase">+</button>
        </div>
    )
}

export default QuantityButton
