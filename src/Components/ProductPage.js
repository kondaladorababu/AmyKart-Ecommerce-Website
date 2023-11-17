import React from 'react';
import '../styles/ProductPage.css';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../Store/StateProvider';


function ProductPage() {
    const location = useLocation();
    const { productData } = location.state;
    const { dispatch } = useStateValue();

    const handleAddProduct = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: productData.id,
            },
        });
    }

    return (
        <div className='productPage'>
            <div className="productPage_container">
                <div className="productPage_image">
                    <img src={productData.image} alt="" />
                </div>
                <div className="productPage_info">
                    <div className="productPage_details">
                        <p className='productPage_title'>{productData.title}</p>
                        <p className='productPage__price'>
                            <small>₹</small>
                            <strong>{productData.price}</strong>
                        </p>
                        <p className='productPage_description'>
                            {productData.description}
                        </p>
                        <div className="productPage_rating">
                            {
                                Array(productData.rating).fill().map((_, index) => (
                                    <p key={index}>⭐</p>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handleAddProduct} className='productPage_addProduct'>Add to basket</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
