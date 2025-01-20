import { createContext, useState } from "react";

const UiContext = createContext({
    type: '',
    showSubmitDetails: () => { },
    hideModal: () => { },
    orderPlacedModal: () => { },
    openProfileDropDown: false,
});

export function UiContextProvider({ children }) {
    const [submit, setSubmit] = useState('');
    const [openProfileDropDown, setOpenProfileDropDown] = useState(false);

    function showSubmitDetails() {
        setSubmit('submitForm');
    }

    function hideModal() {
        setSubmit('');
    }

    function orderPlacedModal() {
        setSubmit('placeOrder');
    }

    function handleOpenProfileDropDown(status) {
        setOpenProfileDropDown(status);
    }

    // Pass state and functions to the Provider value
    const UiContextValue = {
        type: submit,
        showSubmitDetails,
        hideModal,
        orderPlacedModal,

        openProfileDropDown,
        handleOpenProfileDropDown,
    };

    return (
        <UiContext.Provider value={UiContextValue}>
            {children}
        </UiContext.Provider>
    )
}

export default UiContext;