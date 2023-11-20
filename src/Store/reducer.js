
const IsProductPresent = (basket, productId) => {
    const present = basket.some(product => product.id === productId);
    return present;
}

export function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export const initialState = {
    products: [],
    finalProducts: [],
    basket: [],
    totalPrice: 0,
    user: null,
    isModal: false,
    notifications: []
};

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
            let newBasket = null;

            if ([...state.basket].length > 0 && IsProductPresent([...state.basket], action.item.id)) {
                newBasket = [...state.basket].map(product => {
                    if (product.id === action.item.id) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                    return product;
                });
            } else {
                newBasket = [...state.basket, action.item];
            }

            const newTotalPrice = (state.totalPrice * 100 + action.item.price * 100) / 100;
            return {
                ...state,
                basket: newBasket,
                totalPrice: newTotalPrice.toFixed(2),
            }
        case 'REMOVE_FROM_BASKET':
            const productToRemove = state.basket.find(product => product.id === action.id);
            const productQuantity = productToRemove.quantity;
            const priceToRemove = (productQuantity * productToRemove.price);
            const updatedBasket = [...state.basket].filter(item => item.id !== action.id)
            const updatedTotalPrice = (state.totalPrice * 100 - priceToRemove * 100) / 100;

            return {
                ...state,
                basket: updatedBasket,
                totalPrice: updatedTotalPrice.toFixed(2),
            }
        case 'INCREASE_PRODUCT_PRICE':
            const quantityIncBasket = [...state.basket].map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            const increasedTotalPrice = (state.totalPrice * 100 + action.price * 100) / 100;

            return {
                ...state,
                basket: quantityIncBasket,
                totalPrice: increasedTotalPrice.toFixed(2),
            }
        case 'DECREASE_PRODUCT_PRICE':
            const quantityDecBasket = [...state.basket].map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
            const decreasedTotalPrice = (state.totalPrice * 100 - action.price * 100) / 100;

            return {
                ...state,
                basket: quantityDecBasket,
                totalPrice: decreasedTotalPrice.toFixed(2),
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: [],
                totalPrice: 0,
            }
        case 'ADD_NOTIFICATION':
            const updatedNotifications = [...state.notifications, action.notific];

            return {
                ...state,
                notifications: updatedNotifications,
            }
        case 'REMOVE_NOTIFICATION':
            const removedNotifications = [...state.notifications].filter(notif => notif.id !== action.idOfNotific);
            return {
                ...state,
                notifications: removedNotifications,
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