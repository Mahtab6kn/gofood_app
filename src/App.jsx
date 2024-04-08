import './App.css'
import Home from './pages/Home'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import Cart from './pages/Cart';
import MyOrder from './pages/MyOrder';
import Forgotpassword from './pages/Forgot Password';
import ResetPassword from './pages/ResetPassword';
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/myOrder' element={<MyOrder/>} />
          <Route path='/forgotPassword' element={<Forgotpassword/>} />
          <Route path='/resetPassword/:token'  element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
