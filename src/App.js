
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import {Route,Routes, Navigate} from "react-router-dom"


function App() {
  const user=false;
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/products/:category" element={ <ProductList/>}></Route>
    <Route exact path="/product/:id" element={ <Product/>}></Route>
    <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}></Route>

    <Route exact path="/register" element={user ? <Navigate to="/"/> : <Register/>}></Route>
    <Route exact path="/cart" element={<Cart/>}></Route>
   </Routes>
   </>
  );
}

export default App;
