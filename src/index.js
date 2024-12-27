import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Store/StateProvider';
import { UiContextProvider } from './Store/UiContextProvider';
import SubmitDetails from './Components/checkout/SubmitDetails';
import OrderPlacedModal from './Components/checkout/OrderPlacedModal';


const root = ReactDOM.createRoot(document.getElementById('root'));

if (!root) {
  throw new Error('The root element does not exist.');
}

root.render(
  <React.StrictMode>
    <UiContextProvider>
      <StateProvider>
        <App />
        <SubmitDetails />
        <OrderPlacedModal />
      </StateProvider>
    </UiContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
