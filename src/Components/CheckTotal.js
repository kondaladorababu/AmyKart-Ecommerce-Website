import React from 'react';
import '../styles/CheckTotal.css';
import { useStateValue } from '../Store/StateProvider';
import { getBasketTotal } from '../Store/reducer';


function CheckTotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>
            <div>
                <p className='subtotal'>Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong> </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> <p className='subtotal_giftInfo'> This order contains a gift</p>
                </small>
            </div>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default CheckTotal
