import React from 'react';
import './OrderHistory.css';
import OrderHistoryItem from './OrderHistoryItem';
import { useEffect, useState } from 'react';
import axios from 'axios';


function OrderHistory() {

    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState('');
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const fetchProductInformation = async () => {
            setFetching(true);

            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                const data = response.data;

                if (response.status !== 200) {
                    throw new Error('Failed to fetch product information');
                }

                setProductData(data);
                setError();
            } catch (error) {
                setError(error);
            }
            setFetching(false);
        }
        fetchProductInformation();
    }, []);

    return (
        <div className='order_history_container'>
            <div className='order_history_header'>
                <span className='order_history_back'>Back</span>
                <span className='order_history_title'>Order History</span>
            </div>

            <div className='order_history_content'>
                {fetching && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {productData.length > 0 && productData.map((product) => (
                    <OrderHistoryItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default OrderHistory;