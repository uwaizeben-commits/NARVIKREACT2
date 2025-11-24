import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // In a real app, this would be a call to your backend API
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.email === formData.email);

        if (userExists) {
            alert('User with this email already exists!');
        } else {
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! Please log in.');
            navigate('/login');
        }
    }

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label fw-bold">Full Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-label fw-bold">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="phone" className="col-sm-3 col-form-label fw-bold">Phone Number</label>
                                    <div className="col-sm-9">
                                        <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label fw-bold">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                        <div className="card-footer text-end">
                            <small>Already have an account? <NavLink to="/login">Login here</NavLink></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;