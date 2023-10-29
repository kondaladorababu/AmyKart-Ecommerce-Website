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


function App() {
  const [, dispatch] = useStateValue();


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
        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Home />
             
            </>
          }></Route>

          <Route exact path='/HomePage' element={
            <>
              <Header />
              <Home />
            </>
          }></Route>

          <Route exact path='/login' element={
            <>
              <LoginPage />
            </>
          }></Route>

          <Route exact path='/signup' element={
            <>
              <SignUp />
            </>
          }></Route>

          <Route exact path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          }>
          </Route>

        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;
