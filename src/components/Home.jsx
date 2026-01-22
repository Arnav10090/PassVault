import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Zap, Cloud, Check, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (isAuthenticated) {
            navigate('/passwords');
        } else {
            navigate('/signup');
        }
    };

    const features = [
        {
            icon: Shield,
            title: 'Military-Grade Encryption',
            description: 'Your passwords are protected with AES-256 encryption, the same standard used by banks and governments.'
        },
        {
            icon: Cloud,
            title: 'Secure Cloud Storage',
            description: 'Access your passwords from anywhere with secure cloud synchronization across all your devices.'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Instantly retrieve and auto-fill your passwords with just one click. No more fumbling with credentials.'
        },
        {
            icon: Lock,
            title: 'Zero-Knowledge Architecture',
            description: 'We can never see your passwords. Your data is encrypted locally before it ever leaves your device.'
        }
    ];

    const benefits = [
        'Store unlimited passwords securely',
        'Generate strong, unique passwords',
        'Auto-fill credentials across websites',
        'Secure password sharing',
        'Cross-platform synchronization',
        'Breach monitoring and alerts'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            {/* Logo */}
                            <div className="inline-flex items-center text-white mb-8">
                                <span className="text-6xl font-bold text-blue-400">&lt;</span>
                                <span className="text-7xl font-bold">Pass</span>
                                <span className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vault</span>
                                <span className="text-6xl font-bold text-blue-400">/&gt;</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Your Passwords,
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Perfectly Secured
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                                The most secure and user-friendly password manager. Store, generate, and autofill passwords across all your devices with military-grade encryption.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={handleGetStarted}
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-lg"
                                >
                                    <span>{isAuthenticated ? 'Go to My Passwords' : 'Get Started Free'}</span>
                                    <ArrowRight size={20} />
                                </button>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
                                >
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Why Choose PassVault?
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Built with security and simplicity in mind
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                                        <feature.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-card p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                                    <Key size={48} className="text-blue-400 mb-6" />
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Everything You Need in One Secure Place
                                    </h2>
                                    <ul className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start space-x-3 text-gray-300"
                                            >
                                                <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="glass-card p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        🔒 Bank-Level Security
                                    </h3>
                                    <p className="text-gray-300">
                                        Your passwords are encrypted with AES-256 encryption before they ever leave your device. We literally cannot see your passwords.
                                    </p>
                                </div>

                                <div className="glass-card p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        ⚡ Instant Access
                                    </h3>
                                    <p className="text-gray-300">
                                        Auto-fill passwords across all your favorite websites and apps. One click, you're in.
                                    </p>
                                </div>

                                <div className="glass-card p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        🌍 Sync Everywhere
                                    </h3>
                                    <p className="text-gray-300">
                                        Access your passwords on any device, anywhere. Always in sync, always secure.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/20 text-center"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to Secure Your Digital Life?
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Join thousands of users who trust PassVault with their passwords.
                            </p>
                            <button
                                onClick={handleGetStarted}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-lg"
                            >
                                <span>{isAuthenticated ? 'Go to My Passwords' : 'Start Free Today'}</span>
                                <ArrowRight size={20} />
                            </button>
                            <p className="text-gray-400 text-sm mt-4">
                                No credit card required • Free forever
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
