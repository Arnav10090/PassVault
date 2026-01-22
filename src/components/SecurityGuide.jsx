import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Key } from 'lucide-react';

const SecurityGuide = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                            <Shield size={24} className="text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">Security Guide</h1>
                    </div>

                    <div className="space-y-8 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                                <Lock size={20} className="mr-2" />
                                Encryption Standards
                            </h2>
                            <p className="leading-relaxed">
                                PassVault uses industry-standard AES-256 encryption to secure your data. This is the same level of security used by banks and governments. Your passwords are encrypted on your device before they are sent to our servers, ensuring that only you have access to them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                                <Key size={20} className="mr-2" />
                                Zero-Knowledge Architecture
                            </h2>
                            <p className="leading-relaxed">
                                We operate on a zero-knowledge basis. This means we do not store your master password or have any way to decrypt your stored data. You are the only person who holds the keys to your digital vault.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                                <Server size={20} className="mr-2" />
                                Secure Infrastructure
                            </h2>
                            <p className="leading-relaxed">
                                Our servers are hosted in secure, ISO 27001 certified data centers. We employ rigorous access controls, firewalls, and regular security audits to protect against unauthorized access and potential threats.
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <p className="text-sm">
                                <strong>Tip:</strong> Always use a strong, unique master password and enable two-factor authentication (2FA) whenever possible to maximize your account security.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SecurityGuide;
