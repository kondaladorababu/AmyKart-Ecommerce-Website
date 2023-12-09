import React, { useContext } from 'react';
import UiContext from '../Store/UiContextProvider';
import Button from './UI/Button';
import MOdal from './UI/MOdal';
import '../styles/OrderPlacedModal.css';

function OrderPlacedModal() {
    const UiCtx = useContext(UiContext);
    const handleClose = () => {
        UiCtx.hideModal();
    }

    return (
        <div>
            < MOdal open={UiCtx.type === 'placeOrder'}>

                <h3 className='main-text'>Your Order has placed Successfully !</h3>
                <h3 className='child-text'>We will Get Back to you soon.....</h3>

                <p className="modal-actions">
                    <Button type="button" onClick={handleClose} > close</Button>
                </p>

            </MOdal >
        </div>
    )
}

export default OrderPlacedModal
