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
                    title={"Watter Kettel - Pigeon kjhdshsd isjdkljsdk Pigeon kjhdshsd isjdkljsdk "}
                    price={11.22}
                    image={"https://m.media-amazon.com/images/I/717V4glGOsL.jpg"}
                    rating={5}
                />
                <Product
                    id={12321342}
                    title={"Fjallraven - Foldsack No"}
                    price={109.95}
                    image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                    rating={3}
                />
                <Product
                    id={12321343}
                    title={"WD 4TB Gaming Drive Works"}
                    price={114}
                    image={"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"}
                    rating={5}
                />


                <Product
                    id={12321343}
                    title={"WD 4TB Gaming Drive Works "}
                    price={114}
                    image={"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"}
                    rating={5}
                />
                <Product
                    id={12321344}
                    title={"SanDisk SSD PLUS 1TB "}
                    price={109}
                    image={"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"}
                    rating={5}
                />
                <Product
                    id={12321345}
                    title={"White Gold Plated Princess"}
                    price={9.99}
                    image={"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"}
                    rating={5}
                />
                <Product
                    id={12321346}
                    title={"BIYLACLESEN Women's 3-in-1 "}
                    price={10.99}
                    image={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
                    rating={5}
                />
                <Product
                    id={12321346}
                    title={"BIYLACLESEN Women's 3-in-1 "}
                    price={10.99}
                    image={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
                    rating={5}
                />
                <Product
                    id={12321346}
                    title={"BIYLACLESEN Women's 3-in-1"}
                    price={10.99}
                    image={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
                    rating={5}
                />

                <Product
                    id={12321347}
                    title={"WD 2TB Elements Portable "}
                    price={12.99}
                    image={"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"}
                    rating={5}
                />

            </div>
        </div>
    )
}

export default Home
