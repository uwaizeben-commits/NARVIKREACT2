import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../cart.actions';

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(removeItem(item));
    }

    const handleIncrease = (item) => {
        dispatch(increaseQuantity(item));
    }

    const handleDecrease = (item) => {
        dispatch(decreaseQuantity(item));
    }

    const renderCartItems = () => {
        return cartItems.map((item) => (
            <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(item)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <img src={item.image} alt={item.title} className="img-fluid" style={{ maxHeight: '200px' }} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="mt-3 mt-md-0">{item.title}</h3>
                            <p className="lead fw-bold">${item.price}</p>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-outline-primary me-2" onClick={() => handleDecrease(item)}>-</button>
                                <span className="px-2">{item.qty}</span>
                                <button className="btn btn-outline-primary ms-2" onClick={() => handleIncrease(item)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    const renderEmptyCart = () => (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>
    );

    const renderCheckoutButton = () => {
        const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mb-4">
                        <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
                        <NavLink to="/checkout" className="btn btn-primary mb-5 w-100 w-md-25 float-md-end">
                            Proceed To checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {cartItems.length === 0 && renderEmptyCart()}
            {cartItems.length !== 0 && renderCartItems()}
            {cartItems.length !== 0 && renderCheckoutButton()}
        </>
    );
}

export default Cart;