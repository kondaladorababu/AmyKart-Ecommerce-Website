import React, { Fragment } from 'react';
import '../styles/Checkout.css';
import { useStateValue } from '../Store/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import CheckTotal from './CheckTotal';


function Checkout() {
    const { state } = useStateValue();
    const { basket } = state;

    return (
        <div className='checkout'>
            {basket?.length === 0 ?
                (
                    <div className='empty_basket_title'>
                        <h2>Your Basket is Empty</h2>
                        <p>Add Products to see in Your Basket</p>
                    </div>
                ) :
                (
                    <Fragment>
                        <div className="checkout_left">
                            <div>
                                <h2 className='checkout_title'>Items in your Shopping Cart</h2>
                                {basket.map((item, index) => (
                                    <CheckOutProduct
                                        key={index}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        quantity={item.quantity}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="checkout_right">
                            <h2 className='checkout_title'>Items Summary</h2>
                            <CheckTotal />
                        </div>
                    </Fragment>
                )}


        </div>
    )
}

export default Checkout;