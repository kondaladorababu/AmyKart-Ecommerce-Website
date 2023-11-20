import React from 'react';
import '../styles/Checkout.css';
import { useStateValue } from '../Store/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import CheckTotal from './CheckTotal';


function Checkout() {
    const { state } = useStateValue();
    const { basket, user } = state;

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_add'
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Wave3/Train_GW_editorial_2300x646._CB575359240_.jpg"
                    alt=""
                />
                {basket?.length === 0 ?
                    (
                        <div>
                            <h2>Your Basket is Empty</h2>
                            {!user ? <p>Add Products to see in Your Basket</p> : <p>You Have no Items in Your Basket</p>}
                        </div>
                    ) : (
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
                    )}
            </div>

            {basket.length > 0 && (
                <div className="checkout_right">
                    <CheckTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
