import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    if (!email) {
        // Redirect if the user gets here without an email
        navigate('/forgot-password');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd verify the reset code. Here we'll just assume it's correct.
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Password has been reset successfully! Please log in with your new password.');
            navigate('/login');
        } else {
            alert('An error occurred. Please try again.');
        }
    }

    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Reset Password</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="code" className="col-sm-4 col-form-label fw-bold">Reset Code</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="code" value={code} onChange={(e) => setCode(e.target.value)} required placeholder="Enter code from email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="newPassword" className="col-sm-4 col-form-label fw-bold">New Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;