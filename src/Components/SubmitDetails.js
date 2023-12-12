import React, { useContext, useRef } from 'react'
import Input from './UI/Input'
import Button from './UI/Button';
import '../styles/SubmitDetails.css';
import MOdal from './UI/MOdal';
import UiContext from '../Store/UiContextProvider';
import { useStateValue } from '../Store/StateProvider';

function SubmitDetails() {
    const UiCtx = useContext(UiContext);

    const { state } = useStateValue();
    const { totalPrice } = state;

    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        UiCtx.orderPlacedModal();

        formRef.current.reset();
    }

    const handleClose = () => {
        UiCtx.hideModal();
    }

    return (
        < MOdal open={UiCtx.type === 'submitForm'}>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2>Checkout</h2>
                <p style={{ fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}>{'Total Amount: '}</span>{`₹ ${totalPrice}`}</p>
                <Input label={"Full name"} type={"text"} id={"name"} />
                <Input label={"E-Mail Address"} type={"email"} id={"email"} />
                <Input label={"Street"} type={"text"} id={"street"} />

                <div className="control-row">
                    <Input label={"Postal code"} type={"text"} id={"postal-code"} />
                    <Input label={"City"} type={"text"} id={"city"} />
                </div>

                <div className="modal-actions">
                    <Button type="button" onClick={handleClose} >Cancel</Button>
                    <Button>Submit Order</Button>
                </div>
            </form>
        </MOdal >
    )
}

export default SubmitDetails
