import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    // Toggle logic: system -> light -> dark -> system
    const toggleTheme = () => {
        if (theme === 'system') setTheme('light');
        else if (theme === 'light') setTheme('dark');
        else setTheme('system');
    };

    const getThemeIcon = () => {
        if (theme === 'light') return 'fa-sun';
        if (theme === 'dark') return 'fa-moon';
        return 'fa-circle-half-stroke'; // System icon
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link className="navbar-brand" to="/">
                    <i className="fa-regular fa-compass"></i>
                    <span>WanderLust</span>
                </Link>

                <div className="navbar-menu">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/listings">Explore</Link>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-outline"
                        title={`Current theme: ${theme}`}
                        style={{ padding: '0.4rem 0.8rem', borderRadius: '50%' }}
                    >
                        <i className={`fa-solid ${getThemeIcon()}`}></i>
                    </button>

                    <Link className="btn btn-primary nav-btn" to="/listings/new">Airbnb your home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
