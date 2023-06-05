import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-links" to="/">Home</Link>
            <Link className="navbar-links" to="/blog">Blog</Link>
            <Link className="navbar-links" to="/about">About</Link>

            <div className="navbar-buttons">
                <Link to="/login" className="navbar-button">Login</Link>
                <Link to="/signup" className="navbar-button">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
