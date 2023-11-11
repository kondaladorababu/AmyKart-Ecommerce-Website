import React from 'react';
import '../styles/QuantityButton.css';
import { useStateValue } from '../Store/StateProvider';


function QuantityButton(props) {
    const [{ basket }, dispatch] = useStateValue();

    const handleQuantityPrice = (action, id) => {
        if (action === 'decrease') {

            if (props.count === 1) {
                dispatch({
                    type: 'REMOVE_FROM_BASKET',
                    id: id,
                });
            } else {
                props.setCount(props.count - 1);

                let price = null;
                for (var i = 0; i < basket.length; i++) {
                    let product = basket[i];
                    if (product.id === id) {
                        price = product.price;
                        break;
                    }
                }
                dispatch({
                    type: 'DECREASE_PRODUCT_PRICE',
                    price: price,
                });
            }
            //Increase the count & Price
        } else {
            props.setCount(props.count + 1);

            let price = null;
            for (var j = 0; j < basket.length; j++) {
                let product = basket[j];
                if (product.id === id) {
                    price = product.price;
                    break;
                }
            }
            dispatch({
                type: 'INCREASE_PRODUCT_PRICE',
                price: price,
            });
        }
    }

    return (
        <div className="quantity-container">
            <button onClick={() => { handleQuantityPrice('decrease', props.id) }} className="quantity-button quantity_minus" id="decrease">-</button>
            <input value={props.count} readOnly className="quantity-input" id="quantity" type="text" />
            <button onClick={() => { handleQuantityPrice('increase', props.id) }} className="quantity-button quantity_plus" id="increase">+</button>
        </div>
    )
}

export default QuantityButton
