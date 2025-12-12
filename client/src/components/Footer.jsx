import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    &copy; {new Date().getFullYear()} WanderLust, Inc.
                </div>

                <div className="footer-links">
                    <Link className="footer-link" to="/privacy">Privacy</Link>
                    <Link className="footer-link" to="/terms">Terms</Link>
                </div>

                <div className="footer-socials">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
