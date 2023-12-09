import React, { useContext } from 'react';
import '../styles/CheckTotal.css';
import { useStateValue } from '../Store/StateProvider';
import UiContext from '../Store/UiContextProvider';

function CheckTotal() {
    const { state } = useStateValue();
    const { user, basket, totalPrice } = state;

    const UiCtx = useContext(UiContext);

    const openSubmitModal = () => {
        UiCtx.showSubmitDetails();
    }

    return (
        <div className='subtotal'>
            <div>
                <p className='subtotal_main'>Subtotal ({basket.length} items): <strong>{`₹ ${totalPrice}`}</strong> </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> <p className='subtotal_giftInfo'> This order contains a gift</p>
                </small>
            </div>

            <button onClick={openSubmitModal}>Proceed to Checkout</button>
            {!user && <p className='proceed_check'>*Please Login to Proceed*</p>}
        </div>
    )
}

export default CheckTotal
