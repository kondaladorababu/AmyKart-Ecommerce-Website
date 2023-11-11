
export const initialState = {
    products: [],
    finalProducts: [],
    basket: [],
    user: null,
    isModal: false,
    totalPrice: 0,
};

const getBasketTotal = (basket) => {
    const total = basket?.reduce((amount, item) => item.price + amount, 0);
    return total.toFixed(2); // Format the total to two decimal places
};

export function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


function reducer(state, action) {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_DATA':
            return {
                ...state,
                products: action.data,
                finalProducts: action.data,
            }
        case 'SEARCH_RESULTS':
            return {
                ...state,
                finalProducts: action.data,
            }
        case 'LOGIN_TO_ACCESS':
            return {
                ...state,
                isModal: action.openModal,
            }
        case 'ADD_TO_BASKET':
            const newBasket = [...state.basket, action.item];
            const newTotalPrice = getBasketTotal(newBasket);
            return {
                ...state,
                basket: newBasket,
                totalPrice: newTotalPrice,
            }
        case 'REMOVE_FROM_BASKET':
            const updatedBasket = [...state.basket].filter(item => item.id !== action.id)
            const updatedTotalPrice = getBasketTotal(updatedBasket);
            return {
                ...state,
                basket: updatedBasket,
                totalPrice: updatedTotalPrice,
            }
        case 'INCREASE_PRODUCT_PRICE':
            const increasedTotalPrice = (state.totalPrice * 100 + action.price * 100) / 100; // Convert to cents and then back
            return {
                ...state,
                totalPrice: increasedTotalPrice.toFixed(2),
            }
        case 'DECREASE_PRODUCT_PRICE':
            const decreasedTotalPrice = (state.totalPrice * 100 - action.price * 100) / 100;
            return {
                ...state,
                totalPrice: decreasedTotalPrice.toFixed(2),
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: [],
                totalPrice: 0,
            }
        case 'SIGN_OUT':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;