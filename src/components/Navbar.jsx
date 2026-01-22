import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, User, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className='bg-slate-800/95 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/10'>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-400">&lt;</span>
                        <span className="text-3xl font-bold text-white">Pass</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vault</span>
                        <span className="text-2xl font-bold text-blue-400">/&gt;</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/passwords"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/passwords')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        My Passwords
                                    </Link>
                                    <Link
                                        to="/about"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/about')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        About
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/about"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/about')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/login"
                                        className={`transition-all px-4 py-2 rounded-lg text-sm font-medium ${isActive('/login')
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-blue-500/50"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* User Info & Logout - Only show when authenticated */}
                        {isAuthenticated && (
                            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
                                <div className="flex items-center space-x-2 text-sm">
                                    <User size={18} className="text-blue-400" />
                                    <span className="text-gray-300">{user?.name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/passwords"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/passwords')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    My Passwords
                                </Link>
                                <Link
                                    to="/about"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/about')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <div className="px-3 py-2 text-sm text-gray-400 border-t border-white/10 mt-2 pt-2">
                                    Logged in as: {user?.name}
                                </div>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-red-500/10 transition-colors flex items-center space-x-2"
                                >
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/about')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/login"
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${isActive('/login')
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
