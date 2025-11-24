import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './user.actions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Simulate checking credentials against localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // On successful login, dispatch action and navigate
            dispatch(loginSuccess({ email: user.email, name: user.name }));
            navigate('/'); // Redirect to home page after login
        } else {
            // On failed login, show an error
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-label fw-bold">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label fw-bold">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="card-footer text-end">
                            <div className="float-start">
                                <NavLink to="/forgot-password">Forgot Password?</NavLink>
                            </div>
                            <small>Don't have an account? <NavLink to="/register">Register here</NavLink></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;