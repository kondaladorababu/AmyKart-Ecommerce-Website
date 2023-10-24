import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Header />}></Route>
          <Route exact path='/login' element={<h1>Login</h1>}></Route>
          <Route exact path='/checkout' element={<h1>checkout</h1>}>
          </Route>
        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;
