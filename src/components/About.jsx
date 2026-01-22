import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Target, Rocket, Code } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const About = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/passwords');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">PassVault</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in digital security and password management
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
              <Target size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            In today's digital world, remembering and managing multiple passwords can be overwhelming.
            PassVault was created with a simple mission: to make password management effortless and secure for everyone.
            We believe that strong security shouldn't be complicated—it should be accessible, intuitive, and reliable.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: 'Security First',
              description: 'Your data is protected with military-grade AES-256 encryption. We use zero-knowledge architecture, meaning we can never access your passwords.'
            },
            {
              icon: Users,
              title: 'User-Centric',
              description: 'Designed with you in mind. Our interface is clean, intuitive, and makes password management a breeze for users of all technical levels.'
            },
            {
              icon: Heart,
              title: 'Privacy Focused',
              description: 'We respect your privacy. Your data stays yours—encrypted on your device before it ever reaches our servers.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <value.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
              <Rocket size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Securely store unlimited passwords in one convenient location',
              'Quickly retrieve any password with a single click',
              'Generate strong, unique passwords for each account',
              'Military-grade AES-256 encryption for all your data',
              'Cross-device synchronization for seamless access',
              'User-friendly interface for effortless management'
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose PassVault */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
              <Code size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Why Choose PassVault?</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🎯 Simplicity</h3>
              <p className="text-gray-300">Our user-friendly interface makes password management effortless. No technical knowledge required.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🔐 Security</h3>
              <p className="text-gray-300">Your data is protected with industry-leading encryption technologies. Bank-level security for your peace of mind.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🛡️ Privacy</h3>
              <p className="text-gray-300">We respect your privacy and employ zero-knowledge architecture. We literally cannot see your passwords.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🌍 Convenience</h3>
              <p className="text-gray-300">Access your passwords anytime, anywhere, from any device. Seamlessly synced across all your platforms.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the peace of mind that comes with a secure and organized password management system.
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-lg"
          >
            {isAuthenticated ? 'Go to My Passwords' : 'Try PassVault Free'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;