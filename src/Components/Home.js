import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            {/* Producrts with id title price rating image */}
            <div className="home_row">
                <Product
                    id={12321341}
                    title={"Titile1 svsdsd sdvsdvsd "}
                    price={11.22}
                    image={"https://m.media-amazon.com/images/I/717V4glGOsL.jpg"}
                    rating={5}
                />
                <Product
                    id={12321341}
                    title={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop"}
                    price={109.95}
                    image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                    rating={3}
                />

            </div>

            <div className="home_row">
                <Product
                    id={12321341}
                    title={"Titile1 svsdsd sdvsdvsd "}
                    price={11.22}
                    image={"https://assets.adidas.com/images/w_600,f_auto,q_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg"}
                    rating={5}
                />
                <Product
                    id={12321341}
                    title={"Titile1 svsdsd sdvsdvsd "}
                    price={11.22}
                    image={"https://m.media-amazon.com/images/I/717V4glGOsL.jpg"}
                    rating={5}
                />
                <Product
                    id={12321341}
                    title={"Titile1 svsdsd sdvsdvsd "}
                    price={11.22}
                    image={"https://m.media-amazon.com/images/I/717V4glGOsL.jpg"}
                    rating={5}
                />
            </div>

            <div className="home_row">
                <Product
                    id={12321341}
                    title={"Titile1 svsdsd sdvsdvsd "}
                    price={11.22}
                    image={"https://m.media-amazon.com/images/I/717V4glGOsL.jpg"}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
