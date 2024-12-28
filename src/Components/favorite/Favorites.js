import React from 'react';
import '../favorite/Favorites.css';
import FavoritedProduct from './FavoritedProduct';
import { useStateValue } from '../../Store/StateProvider';

function Favorites() {
    const { state } = useStateValue();
    const { favorited } = state;

    return (
        <div className='favorites'>
            {favorited.length === 0 ? (
                <div className='empty-favorites-info'>
                    <h2>Your Favorite is Empty</h2>
                    <p> Please Add Items to see in Favorites</p>
                </div >
            ) : (
                <>
                    <h2 className='fav-text-heading'> Your Favorited Products</h2>
                    <div className="favorite-row">
                        {favorited.map((product) => (
                            <FavoritedProduct
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                                title={product.title}
                                isFilled={product.isFilled}
                            />
                        ))}
                    </div>
                </>
            )}

        </div>
    )
}

export default Favorites;
