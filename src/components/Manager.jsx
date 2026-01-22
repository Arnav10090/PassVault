import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { X, Lock, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Manager = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleTryNow = () => {
    if (isAuthenticated) {
      navigate('/passwords');
    } else {
      setShowModal(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
    >
      <div
        className="flex items-center"
        style={{
          transform: isMounted ? 'translateY(40px)' : 'translateY(0)',
          opacity: isMounted ? 1 : 0,
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <span className="text-7xl font-bold text-blue-900 ml-1">&lt;</span>
        <span className="text-8xl font-bold text-gray-800 mr-2">Pass</span>
        <span className="text-8xl font-bold text-blue-500">Vault</span>
        <span className="text-7xl font-bold text-blue-900 ml-1">/&gt;</span>
      </div>
      <div className="mt-10 text-center"
        style={{
          transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
          opacity: isMounted ? 1 : 0,
          transition: 'all 0.8s ease-in-out'
        }}
      >
        <h1 className="text-4xl font-bold mb-1">Welcome to PassVault</h1>
        <p className="text-2xl mb-1 text-blue-600">
          <b>Your own Password Manager</b>
        </p>
        <p className="text-lg mb-1 text-blue-600">
          <b>Store your passwords securely and access them anytime, anywhere.</b>
        </p>
        <br />
        <button
          onClick={handleTryNow}
          className="btn btn-outline-primary text-3xl"
          style={{
            transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
            opacity: isMounted ? 1 : 0,
            transition: 'all 0.7s ease-in-out'
          }}
        >
          TRY NOW!
        </button>
      </div>

      {/* Modern Login Required Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Lock size={32} className="text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                Login Required
              </h2>

              {/* Message */}
              <p className="text-gray-300 text-center mb-8">
                Please login or create an account to access your secure password vault.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-center flex items-center justify-center space-x-2"
                  onClick={() => setShowModal(false)}
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="block w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-center flex items-center justify-center space-x-2"
                  onClick={() => setShowModal(false)}
                >
                  <UserPlus size={20} />
                  <span>Create Account</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Manager;