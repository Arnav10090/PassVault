import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                            <Lock size={24} className="text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                    </div>

                    <div className="space-y-6 text-gray-300">
                        <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-xl font-semibold text-purple-400 mb-3">1. Information We Collect</h2>
                            <p className="leading-relaxed mb-4">
                                We collect minimal personal information necessary to provide our services:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Account information (username, email address)</li>
                                <li>Encrypted vault data (which we cannot decrypt)</li>
                                <li>Usage logs (for security and performance monitoring)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-purple-400 mb-3">2. How We Use Your Information</h2>
                            <p className="leading-relaxed">
                                We use your information solely to operate, maintain, and improve PassVault. We do not sell your personal data to third parties. Your encrypted data remains private and inaccessible to us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-purple-400 mb-3">3. Data Storage and Protection</h2>
                            <p className="leading-relaxed">
                                Your data is stored on secure servers with robust physical and digital safeguards. We use advanced encryption to ensure confidentiality and integrity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-purple-400 mb-3">4. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@passvault.com" className="text-purple-400 hover:text-purple-300 underline">privacy@passvault.com</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
