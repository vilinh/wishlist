import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left-logo">
                <h3>Gift Me</h3>
            </div>
            <div className="right">
                <li>Login</li>
                <li>Register</li>
            </div>
        </div>
    )
}
