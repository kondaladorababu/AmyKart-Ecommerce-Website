const dummyItemInCart = {
    id: 1232134,
    title: "Titile1 svsdsd sdvsdvsd ",
    price: 11.22,
    image: "https://m.media-amazon.com/images/I/717V4glGOsL.jpg",
    rating: 5,
}

export const initialState = {
    basket: [dummyItemInCart, dummyItemInCart],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket].filter(item => item.id !== action.id)

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;