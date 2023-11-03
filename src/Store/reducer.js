
export const initialState = {
    products: [],
    finalProducts: [],
    basket: [],
    user: null,
    isModal: false,
};

export const getBasketTotal = (basket) => {
    const total = basket?.reduce((amount, item) => item.price + amount, 0);
    return total.toFixed(2); // Format the total to two decimal places
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
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: [],
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