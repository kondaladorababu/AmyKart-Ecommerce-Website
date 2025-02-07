import React, { useState } from 'react';
import './OrderHistoryItem.css';
import { truncate } from './../../Store/reducer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';

export default function OrderHistoryItem({ product }) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate(`/${category}/productPage`);
    };

    var category = product.category;

    return (

        <div className='order_history_item'>
            <div className='order_history_item_body' onClick={()=>{handleClick(category);}}>
                <div className='order_history_item_body_left'>
                    <div className='order_history_item_image'>
                        <img src={product.image} alt='product' />
                    </div>
                    <div className='order_history_item_info'>
                        <h4>{truncate(product.description, 55)}</h4>
                        <span>Quantity: 1</span>
                        <span>Total: ₹{product.price}</span>
                    </div>
                </div>

                <div className='order_history_item_body_right'>
                    <span>Order Date: 01-01-2025</span>
                    <span>Order Status: Delivered</span>
                    <span>Order ID: 123456</span>
                </div>
            </div>
            <div className='order_history_item_more_info_button' onClick={toggleMoreInfo}>
                {showMoreInfo ? 'Show Less' : 'Show More'}
                {showMoreInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <div className={`order_history_item_more_info ${showMoreInfo ? 'show' : ''}`}>
                <section className='order_history_item_more_info_section shipping_info'>
                    <h4>Shipping Information</h4>
                    <div className='section_content'>
                        <p>Address: <span>123 Main St, Springfield, IL</span></p>
                        <p>Tracking Number: <span>1Z999AA10123456784</span></p>
                    </div>
                </section>

                <section className='order_history_item_more_info_section price_details'>
                    <h4>Price Details</h4>
                    <div className='section_content price_details_section'>
                        <div className='price_details_content'>
                            <p>Item Price: <span>₹{product.price}</span></p>
                            <p>Handling Fees: <span>₹50</span></p>
                            <p>Delivery Fees: <span>₹100</span></p>
                            <p>Discount: <span>₹0</span></p>
                            <p>Total Amount: <span>₹{product.price + 50 + 100}</span></p>
                        </div>

                        <div className='payment_details_content'>
                            <p>Payment Method: <span>Credit Card</span></p>
                            <p>Payment Status: <span>Paid</span></p>
                            <p>Transaction ID: <span>9876543210</span></p>
                        </div>
                    </div>


                </section>

                {/* <section className='order_history_item_more_info_section customer_info'>
                    <h4>Customer Information</h4>
                    <div className='section_content'>
                        <p>Name: <span>John Doe</span></p>
                        <p>Email: <span>test@gmail.com</span> </p>
                        <p>Phone: <span>123-456-7890</span></p>
                    </div>
                </section> */}
            </div>
        </div>
    )
}