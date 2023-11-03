import React, { Fragment, useEffect } from 'react';
import '../styles/Home.css';
import Product from './Product';
import axios from 'axios';
import { useStateValue } from '../Store/StateProvider';
import Spinner from './Spinner';
import Modal from './Modal';

function Home() {
    const [{ finalProducts, products, isModal }, dispatch] = useStateValue();

    // const navigate = useNavigate();

    const closeModal = () => {
        dispatch({
            type: 'LOGIN_TO_ACCESS',
            openModal: false,
        });
        // navigate('/login');
    };


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {

                dispatch({
                    type: 'SET_DATA',
                    data: response.data,
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);


    return (
        <Fragment>

            <div className='home'>
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                {products.length === 0 && <Spinner />}
                {finalProducts.length === 0 && <p style={{ fontSize: '30px', fontWeight: '800', display: 'flex', justifyContent: 'center' }}>No Results Found</p>}
                {finalProducts && <div className="home_row">
                    {isModal && <Modal onClose={closeModal} info={'Please Login To Add to basket'} />}
                    {finalProducts.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={Math.round(product.rating.rate)}
                        />
                    )
                    )}

                </div>}

            </div>


        </Fragment>

    )
}

export default Home
