import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Check if user is logged in on mount
    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem('token');

            if (storedToken) {
                try {
                    // Check if token is expired
                    const decoded = jwtDecode(storedToken);
                    if (decoded.exp * 1000 < Date.now()) {
                        // Token expired
                        logout();
                    } else {
                        // Get user info
                        const userData = await api.getCurrentUser(storedToken);
                        setUser(userData.user);
                        setToken(storedToken);
                    }
                } catch (error) {
                    console.error('Auth initialization error:', error);
                    logout();
                }
            }

            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await api.login(email, password);
            localStorage.setItem('token', response.token);
            setToken(response.token);
            setUser(response.user);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await api.signup(name, email, password);
            localStorage.setItem('token', response.token);
            setToken(response.token);
            setUser(response.user);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
