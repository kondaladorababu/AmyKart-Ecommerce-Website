import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import { useStateValue } from './Store/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import ProductPage from './Components/ProductPage';
import Notification from './Components/Notification';
import Footer from './Components/Footer';
import Favorites from './Components/Favorites';
import Profile from './Components/Profile';
import SubmitDetails from './Components/SubmitDetails';

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
              <Home />
              <SubmitDetails/>
              <Footer />
            </>
          }></Route>

          <Route exact path='/HomePage' element={
            <>
              <Header />
              <Home />
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

          <Route exact path='/productPage' element={
            <>
              <Header />
              <ProductPage />
            </>
          }>
          </Route>

        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;
