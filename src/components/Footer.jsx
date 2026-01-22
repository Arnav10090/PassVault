import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Mail, Heart, Shield, Lock, ExternalLink, CheckCircle, X } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            return;
        }

        setIsSubscribing(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubscribing(false);
            setShowPopup(true);
            setEmail('');
        }, 1000);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-1 group">
                            <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">&lt;</span>
                            <span className="text-2xl font-bold text-white">Pass</span>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vault</span>
                            <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">/&gt;</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner in digital security. properly securing your digital life with military-grade encryption and zero-knowledge architecture.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://github.com/Arnav10090/PassVault" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href="https://x.com/passvault" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCP58uS7v_Iedv9LTu0R74iQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                                <Youtube size={20} />
                            </a>
                            <a href="mailto:contact@passvault.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/passwords" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                                    My Passwords
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/security-guide" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                                    <Shield size={14} className="mr-2" />
                                    Security Guide
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                                    <Lock size={14} className="mr-2" />
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group">
                                    <ExternalLink size={14} className="mr-2" />
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest security tips and updates.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                            <button 
                                type="submit"
                                disabled={isSubscribing}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} PassVault. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-current animate-pulse" />
                        <span>by</span>
                        <a
                            href="https://github.com/Arnav10090"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity"
                        >
                            Arnav Tiwari
                        </a>
                    </div>
                </div>
            </div>

            {/* Success Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                        
                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            {/* Success icon */}
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle size={32} className="text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Successfully Subscribed!
                            </h3>

                            {/* Message */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Thank you for subscribing to our newsletter! You'll receive the latest security tips, updates, and exclusive content directly in your inbox.
                            </p>

                            {/* Action button */}
                            <button
                                onClick={closePopup}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                            >
                                Awesome!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;