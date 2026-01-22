import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                            <FileText size={24} className="text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
                    </div>

                    <div className="space-y-6 text-gray-300">
                        <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using PassVault, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">2. Description of Service</h2>
                            <p className="leading-relaxed">
                                PassVault provides a secure password management service. You are responsible for maintaining the confidentiality of your master password and account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">3. User Conduct</h2>
                            <p className="leading-relaxed mb-4">
                                You agree not to use the service for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">4. Disclaimer of Warranties</h2>
                            <p className="leading-relaxed">
                                The service is provided on an "as is" and "as available" basis. PassVault makes no warranties regarding the reliability or availability of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-cyan-400 mb-3">5. Termination</h2>
                            <p className="leading-relaxed">
                                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
