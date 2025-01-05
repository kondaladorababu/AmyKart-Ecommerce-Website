import React, { Fragment, useEffect, useState } from 'react';
import '../product/ProductsHome.css';
import Product from './Product';
import axios from 'axios';
import { useStateValue } from '../../Store/StateProvider';
import Spinner from '../common/Spinner';
import Modal from '../UI/MOdal';
import { useParams } from 'react-router-dom';
import Filters from '../common/Filters';
import Path from '../common/Path';

let first = true;

function Products() {
    const { categoryId } = useParams();

    const { state, dispatch } = useStateValue();
    const { finalProducts, isModal } = state;
    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState('');

    const categoryFilters = {
        electronics: [
            { id: "price", label: "Price", type: "range", min: 1000, max: 50000 },
            { id: "brand", label: "Brand", type: "checkbox", options: ["Apple", "Samsung", "Sony"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },

        ],
        clothing: [
            { id: "price", label: "Price", type: "range", min: 100, max: 10000 },
            { id: "brand", label: "Brand", type: "checkbox", options: ["Nike", "Adidas", "Zara"] },
            { id: "size", label: "Sizes", type: "checkbox", options: ["Small", "Medium", "Large", "XLarge"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "color", label: "Color", type: "checkbox", options: ["Red", "Blue", "Green", "Black"] },
            { id: "material", label: "Material", type: "checkbox", options: ["Cotton", "Polyester", "Silk"] },
            { id: "fit", label: "Fit", type: "checkbox", options: ["Regular Fit", "Slim Fit", "Skinny Fit"] },
            { id: "occasion", label: "Occasion", type: "checkbox", options: ["Casual", "Formal", "Party"] },
            { id: "neck", label: "Neck", type: "checkbox", options: ["Round Neck", "V Neck", "Polo Neck"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
        ],
        books: [
            { id: "price", label: "Price", type: "range", min: 10, max: 5000 },
            { id: "author", label: "Author", type: "checkbox", options: ["Chetan Bhagat", "Robin Sharma", "Ruskin Bond"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "genre", label: "Genre", type: "checkbox", options: ["Fiction", "Non-Fiction", "Biography"] },
            { id: "language", label: "Language", type: "checkbox", options: ["English", "Hindi", "Marathi"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
        ],
        sports: [
            { id: "price", label: "Price", type: "range", min: 100, max: 20000 },
            { id: "brand", label: "Brand", type: "checkbox", options: ["Nike", "Adidas", "Puma"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
            { id: "color", label: "Color", type: "checkbox", options: ["Red", "Blue", "Green", "Black"] },
        ],
        footwear: [
            { id: "price", label: "Price", type: "range", min: 300, max: 2000 },
            { id: "brand", label: "Brand", type: "checkbox", options: ["Nike", "Adidas", "Puma"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
            { id: "size", label: "Size", type: "checkbox", options: ["6", "7", "8", "9", "10"] },
            { id: "material", label: "Material", type: "checkbox", options: ["Leather", "Canvas", "Synthetic"] },
            { id: "occasion", label: "Occasion", type: "checkbox", options: ["Casual", "Formal", "Party"] },
        ],
        fitness: [
            { id: "price", label: "Price", type: "range", min: 500, max: 2000 },
            { id: "brand", label: "Brand", type: "checkbox", options: ["Nike", "Adidas", "Puma"] },
            { id: "discount", label: "Discount", type: "checkbox", options: ["10% and above", "20% and above", "50% and above"] },
            { id: "rating", label: "Rating", type: "checkbox", options: ["4⭐ and above", "3⭐ and above", "2⭐ and above"] },
            { id: "color", label: "Color", type: "checkbox", options: ["Red", "Blue", "Green", "Black"] },
            { id: "material", label: "Material", type: "checkbox", options: ["Leather", "Canvas", "Synthetic"] },
            { id: "type", label: "Type", type: "checkbox", options: ["Running", "Training", "Walking"] },
        ],

    };

    const closeModal = () => {
        dispatch({
            type: 'LOGIN_TO_ACCESS',
            openModal: false,
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setIsfetching(true);
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const resData = response.data;

                if (response.status !== 200) {
                    throw new Error('Failed to fetch Products');
                }

                dispatch({
                    type: 'SET_DATA',
                    data: resData,
                });
                setError('');
            } catch (error) {
                setError(error);
            }
            setIsfetching(false);
        }
        if (first) {
            first = false;
            fetchProducts();
        }
    }, [dispatch]);

    if (error) {
        return <Modal onClose={closeModal} info={'Error Fetching Products. Please Try Again Later'} />
    }

    const currentCategory = "clothing";
    const filters = categoryFilters[currentCategory];

    return (
        <Fragment>
            <div className='products_home'>
                {isFetching && <Spinner />}
                {!isFetching && finalProducts.length === 0 && <p style={{ fontSize: '30px', fontWeight: '800', display: 'flex', justifyContent: 'center' }}>No Results Found</p>}

                {/* <div className="products-home"> */}
                {!isFetching && finalProducts &&
                    <Fragment>
                        <section className="products-home-filters">
                            <Filters filters={filters} />
                        </section>

                        <div className="product_results">

                            <Path currentCategory={currentCategory} finalProducts={finalProducts} />

                            <div className="home_row">
                                {isModal && <Modal onClose={closeModal} info={'Please Login To Add to basket'} />}

                                {finalProducts.map((product, index) => (
                                    <Product
                                        key={index} // Ensure unique key for each product
                                        category={product.category}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        description={product.description}
                                        image={product.image}
                                        rating={Math.round(product.rating.rate)}
                                        isFilled={product.isFilled}
                                    />
                                ))}
                            </div>
                        </div>
                    </Fragment>
                }
                {/* </div> */}

            </div>
        </Fragment>
    )
}

export default Products;