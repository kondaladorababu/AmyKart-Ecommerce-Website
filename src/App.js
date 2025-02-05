import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/common/Header';
import Products from './Components/product/ProductsHome';
import Checkout from './Components/checkout/Checkout';
import LoginPage from './Components/login/LoginPage';
import SignUp from './Components/login/SignUp';
import { useStateValue } from './Store/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import ProductPage from './Components/product/ProductPage';
import Notification from './Components/common/Notification';
import Footer from './Components/common/Footer';
import Profile from './Components/profile/Profile';
import Favorites from './Components/favorite/Favorites';
import Category from './Components/category/Category';
import OrderHistory from './Components/Order/OrderHistory';

function App() {
  const { dispatch } = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //alreadyLogged In
        dispatch({
          type: 'SET_USER',
          user: userAuth,
        })

      } else {
        // Not logged In
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Notification />
        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Category />
              <Footer />
            </>
          }></Route>

          <Route exact path='/HomePage' element={
            <>
              <Header />
              <Category />
              <Footer />
            </>
          }></Route>

          <Route exact path='/:category' element={
            <>
              <Header />  
              <Products />
              <Footer />
            </>
          }></Route>

          <Route exact path='/login' element={
            <LoginPage />
          }></Route>

          <Route exact path='/signup' element={
            <SignUp />
          }></Route>

          <Route exact path='/favorites' element={
            <>
              <Header />
              <Favorites />
              <Footer />
            </>
          }>
          </Route>

          <Route exact path='/checkout' element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }>
          </Route>

          <Route exact path='/profile' element={
            <>
              <Header />
              <Profile />
              <Footer />
            </>
          }>
          </Route>

          <Route exact path='/:category/productPage' element={
            <>
              <Header />
              <ProductPage />
            </>
          }>
          </Route>
          <Route exact path='/orderHistory' element={
            <>
              <Header />
              <OrderHistory />
              <Footer />
            </>
          }>
          </Route>

        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;
