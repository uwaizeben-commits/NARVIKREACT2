import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../user.actions';
import { Collapse } from 'bootstrap';

const Header = () => {
    const cartItems = useSelector((state) => state.handleCart);
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const collapseRef = useRef(null);

    const handleLogout = () => {
        dispatch(logout());
        handleNavClick();
    }

    const handleNavClick = () => {
        if (collapseRef.current && collapseRef.current.classList.contains('show')) {
            const bsCollapse = new Collapse(collapseRef.current);
            bsCollapse.hide();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top" style={{ backgroundColor: 'skyblue' }}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">Over's Store</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink onClick={handleNavClick} className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={handleNavClick} className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={handleNavClick} className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={handleNavClick} className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {currentUser ? (
                            <button onClick={handleLogout} className="btn btn-light m-2"><i className="fa fa-sign-out me-1"></i> Logout</button>
                        ) : (
                            <>
                                <NavLink onClick={handleNavClick} to="/login" className="btn btn-light m-2"><i className="fa fa-sign-in me-1"></i> Login</NavLink>
                                <NavLink onClick={handleNavClick} to="/register" className="btn btn-light m-2"><i className="fa fa-user-plus me-1"></i> Register</NavLink>
                            </>
                        )}
                        <NavLink onClick={handleNavClick} to="/cart" className="btn btn-light m-2"><i className="fa fa-cart-shopping me-1"></i> Cart ({cartItems.length})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;