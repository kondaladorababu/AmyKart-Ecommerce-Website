import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import LoginPage from './Components/LoginPage';

function App() {
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

          <Route exact path='/login' element={
            <>
              <Header />
              <LoginPage/>
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
