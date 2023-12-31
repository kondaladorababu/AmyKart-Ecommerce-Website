import React, { Fragment, useEffect, useState } from 'react';
import '../styles/Home.css';
import Product from './Product';
import axios from 'axios';
import { useStateValue } from '../Store/StateProvider';
import Spinner from './Spinner';
import Modal from './Modal';
let first = true;

function Home() {
    const { state, dispatch } = useStateValue();
    const { finalProducts, isModal } = state;
    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState('');

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
        return <Modal onClose={closeModal} info={'Error Fetching Products . Please Try Again Later'} />
    }


    return (
        <Fragment>

            <div className='home'>
                {isFetching && <Spinner />}
                {/* once finalproducts is set The refresh sets fetching true so spinner occurs but the final prdcts are alrdy set so that prd displac under spinner
                  so when fething is true dont show except soinner even though finalprdcts r ready*/}
                {!isFetching && finalProducts.length === 0 && <p style={{ fontSize: '30px', fontWeight: '800', display: 'flex', justifyContent: 'center' }}>No Results Found</p>}
                {!isFetching && finalProducts && <div className="home_row">
                    {isModal && <Modal onClose={closeModal} info={'Please Login To Add to basket'} />}
                    {finalProducts.map((product) => (
                        <Product
                            key={product.id}
                            category={product.category}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            rating={Math.round(product.rating.rate)}
                            isFilled={product.isFilled}
                        />
                    )

                    )}

                </div>}

            </div>


        </Fragment >

    )
}

export default Home
