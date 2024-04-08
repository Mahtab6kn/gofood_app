import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import { NavLink, useNavigate } from 'react-router-dom'
import Modal from '../Modal'
import Cart from '../pages/Cart';
import Mart from '../pages/Mart';
import { useCart } from './ContextReducer';
const Navbar = () => {
    const data = useCart();
    const [cartView, setCartView] = useState(false)
    const navigate = useNavigate()
    const auth = localStorage.getItem('user');

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <div className="navbar-brand fs-1 fst-italic fw-bold"><span onClick={()=> navigate('/')} role='button'>GoFood</span></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {(auth) ?
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link fs-5" aria-current="page" to="/myOrder">Orders</NavLink>
                                </li>
                            </ul>
                            : <ul className='me-auto'></ul>
                        }
                        <div className="navbar-nav d-flex ">
                            {(!auth) ?
                                <div className='d-flex'>
                                    <div className="nav-item">
                                        <NavLink className="btn bg-white text-info mx-1 " to="/login">Login</NavLink>
                                    </div>
                                    <div className="nav-item">
                                        <NavLink className="btn bg-white text-info mx-1" to="/signup">Signup</NavLink>
                                    </div>
                                </div>
                                :
                                <div className='d-flex'>
                                    <div className="nav-item">
                                        <NavLink className="btn bg-white text-info mx-1" to="#" onClick={() => setCartView(true)}>
                                            Cart {" "}
                                            {(data.length!=0)? <Badge pill bg='danger'>{data.length}</Badge>:""}
                                        </NavLink> 
                                    </div>
                                    {cartView ? <Modal onClose={() => setCartView(false)} childern={<Cart/>}></Modal> : ""}
                                    <div className="nav-item">
                                        <NavLink className="btn bg-white text-danger mx-1" to="/login" onClick={logout}>Logout</NavLink>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar