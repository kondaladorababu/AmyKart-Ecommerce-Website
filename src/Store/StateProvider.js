import React, { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
    products: [],
    finalProducts: [],
    basket: [],
    favorited: [],
    totalPrice: 0,
    user: null,
    isModal: false,
    notifications: []
};

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);