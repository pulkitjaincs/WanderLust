import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // "light", "dark", or "system"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'system';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        const applyTheme = (targetTheme) => {
            if (targetTheme === 'dark') {
                root.setAttribute('data-theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
            }
        };

        const handleSystemChange = (e) => {
            if (theme === 'system') {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (theme === 'system') {
            applyTheme(mediaQuery.matches ? 'dark' : 'light');
            mediaQuery.addEventListener('change', handleSystemChange);
        } else {
            applyTheme(theme);
        }

        localStorage.setItem('theme', theme);

        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
