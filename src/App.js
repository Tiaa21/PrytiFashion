
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import {Route,Routes, Navigate} from "react-router-dom"
import "./index.css";
import AboutUs from './pages/About';


function App() {
  const user=false;
  return (
   <>
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/products" element={ <ProductList/>}></Route>
    <Route exact path="/product/:id" element={ <ProductDetail/>}></Route>
    <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}></Route>

    <Route exact path="/aboutus" element={<AboutUs/>}></Route>
    <Route exact path="/cart" element={<Cart/>}></Route>
   </Routes>
   </>
  );
}

export default App;
