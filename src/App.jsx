import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/about'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/ProductDetails'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
