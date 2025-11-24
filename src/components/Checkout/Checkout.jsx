import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector((state) => state.handleCart);

    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

    const renderItems = () => {
        return (
            <ul className="list-group mb-3">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{item.title}</h6>
                            <small className="text-muted">Quantity: {item.qty}</small>
                        </div>
                        <span className="text-muted">${(item.price * item.qty).toFixed(2)}</span>
                    </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${totalAmount.toFixed(2)}</strong>
                </li>
            </ul>
        );
    }

    return (
        <div className="container my-5">
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-1">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">{totalItems}</span>
                    </h4>
                    {renderItems()}
                </div>
                <div className="col-md-7 col-lg-8 order-md-0">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" required />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required />
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            </div>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                <label className="form-check-label" htmlFor="debit">Debit card</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                <small className="text-muted">Full name as displayed on card</small>
                            </div>

                            <div className="col-12">
                                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY" required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                            </div>
                        </div>


                        <hr className="my-4" />

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;