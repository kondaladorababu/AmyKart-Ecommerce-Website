import React from 'react';
import '../product/ProductPage.css';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../Store/StateProvider';
import ReviewCard from '../review/ReviewCard';
import Rating from '@mui/material/Rating';
import Product from './Product';
import ProductInfo from './ProductInfo';
import Path from '../common/Path';


function ProductPage() {
    const location = useLocation();
    const { productData } = location.state;
    const { state, dispatch } = useStateValue();
    const { notifications } = state;

    const handleAddProduct = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: productData.id,
                image: productData.image,
                price: productData.price,
                title: productData.title,
                quantity: 1,
            },
        });

        const newNotification = {
            id: notifications.length + 1,
            message: 'Added to Basket',
        };

        dispatch({
            type: 'ADD_NOTIFICATION',
            notific: newNotification,
        });

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION',
                idOfNotific: newNotification.id,
            });
        }, 3000);
    }

    const similarProducts = [
        {
            id: 1,
            title: 'Product 1',
            price: 100,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: 4,
            category: 'electronics',
            description: 'Product 1 description',

        }, {
            id: 1,
            title: 'Product 1',
            price: 100,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: 4,
            category: 'electronics',
            description: 'Product 1 description',

        },
        {
            id: 1,
            title: 'Product 1',
            price: 100,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: 4,
            category: 'electronics',
            description: 'Product 1 description',

        },
        {
            id: 1,
            title: 'Product 1',
            price: 100,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: 4,
            category: 'electronics',
            description: 'Product 1 description',

        },
        {
            id: 1,
            title: 'Product 1',
            price: 100,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: 4,
            category: 'electronics',
            description: 'Product 1 description',

        },


    ];

    const reviews = [
        {
            id: 1,
            rating: 5,
            review: 'Best product ever!',
            reviewer: 'John Doe',
        },
        {
            id: 2,
            rating: 4,
            review: 'Great product!',
            reviewer: 'Jane Doe',
        },
        {
            id: 3,
            rating: 3,
            review: 'Good product!',
            reviewer: 'Jane Doe',
        },
        {
            id: 4,
            rating: 2,
            review: 'Not bad!',
            reviewer: 'Jane Doe',

        },
        {
            id: 5,
            rating: 1,
            review: 'Worst product ever!',
            reviewer: 'Jane Doe',

        },
        {
            id: 6,
            rating: 1,
            review: 'Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! Worst product ever! ',
            reviewer: 'Jane Doe',
        },
    ];

    return (
        <div className='productPage'>
            <div className="productPage_container">

                <div className="productPage_left">
                    <div className="productPage_image">
                        <img src={productData.image} alt="" />
                    </div>
                </div>

                <div className='product_right'>

                    <Path className="productPage_right_header" currentCategory={"clothing"} finalProducts={['', '']} />

                    <div className="productPage_info">
                        <div className="productPage_main_info">
                            <p className='productPage_title'>{productData.title}</p>
                            <p className='productPage__price'>
                                <small>₹</small>
                                <strong>{productData.price}</strong>
                            </p>
                            <p className='productPage_description'>
                                {productData.description}
                            </p>

                            <p className='productPage_stock'>
                                <strong>Stock:</strong> {productData.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </p>
                            <p className='productPage_category'>
                                <strong>Category:</strong> {productData.category}
                            </p>

                            <div className="productPage_rating">
                                <Rating name="read-only" value={productData.rating} readOnly />
                                <p>&nbsp;&amp;&nbsp;</p>
                                <p>{reviews.length} Reviews</p>
                            </div>
                        </div>

                        <ProductInfo />
                        <button onClick={handleAddProduct} className='productPage_addProduct'>Add to basket</button>
                    </div>

                    <div className="productPage_reviews">
                        <span className='rating_title'>Ratings & Reviews</span>
                        <div className="productPage_reviewsContainer">
                            {
                                reviews.map(review => (
                                    <ReviewCard key={review.id} review={review} />
                                ))
                            }
                        </div>
                    </div >

                </div>

            </div>

            <div className='similar_products_container'>
                <h3>Similar Products</h3>
                <div className="similar_products_row">
                    {similarProducts.map((product) => (
                        <Product
                            key={product.id}
                            category={product.category}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default ProductPage
