import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.email === email);

        if (userExists) {
            // In a real app, you would send a code via email.
            // Here, we'll just simulate it and navigate to the reset page.
            alert('A password reset code has been sent to your email (simulation).');
            // We pass the email in the state to the next route
            navigate('/reset-password', { state: { email: email } });
        } else {
            alert('No account found with that email address.');
        }
    }

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Forgot Password</h3>
                        </div>
                        <div className="card-body">
                            <p>Enter your registered email address to receive a password reset code.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-4 col-form-label fw-bold">Email Address</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Send Reset Code</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;