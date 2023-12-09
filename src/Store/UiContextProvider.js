import { createContext, useState } from "react";

const UiContext = createContext({
    type: '',
    showSubmitDetails: () => { },
    hideModal: () => { },
    orderPlacedModal: () => { }
});

export function UiContextProvider({ children }) {
    const [submit, setSubmit] = useState('');

    function showSubmitDetails() {
        setSubmit('submitForm');
    }

    function hideModal() {
        setSubmit('');
    }

    function orderPlacedModal() {
        setSubmit('placeOrder');
    }

    // Pass state and functions to the Provider value
    const UiContextValue = {
        type: submit,
        showSubmitDetails,
        hideModal,
        orderPlacedModal,
    };

    return (
        <UiContext.Provider value={UiContextValue}>
            {children}
        </UiContext.Provider>
    )
}

export default UiContext;