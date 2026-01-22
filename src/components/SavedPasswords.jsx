import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Copy, Edit, Trash2, Save } from 'lucide-react';
import api from '../services/api';

const SavedPasswords = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null, index: null });

  useEffect(() => {
    fetchPasswords();
  }, []);

  // Fetch passwords from API
  const fetchPasswords = async () => {
    try {
      setFetchLoading(true);
      const data = await api.getPasswords();
      setSavedPasswords(data);
    } catch (error) {
      toast.error('Failed to load passwords. Please make sure the backend is running.', {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      console.error('Error fetching passwords:', error);
    } finally {
      setFetchLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const copyText = (text) => {
    toast.success('Copied to clipboard!', {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = async () => {
    if (url && username && password) {
      const passwordData = {
        url,
        username,
        password,
      };

      try {
        setLoading(true);

        if (editingId !== null) {
          await api.updatePassword(editingId, passwordData);
          toast.success('Password updated successfully!', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          setEditingIndex(null);
          setEditingId(null);
        } else {
          await api.createPassword(passwordData);
          toast.success('Password saved successfully!', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }

        await fetchPasswords();
        setUrl('');
        setUsername('');
        setPassword('');
      } catch (error) {
        toast.error('Failed to save password. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
        console.error('Error saving password:', error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.warning('Please fill in all fields', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const deletePassword = async (id, index) => {
    try {
      await api.deletePassword(id);
      toast.success('Password deleted!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      setSavedPasswords(prevPasswords => {
        const updatedPasswords = [...prevPasswords];
        updatedPasswords.splice(index, 1);
        return updatedPasswords;
      });

      setDeleteConfirm({ show: false, id: null, index: null });
    } catch (error) {
      toast.error('Failed to delete password. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      console.error('Error deleting password:', error);
    }
  };

  const handleDeleteClick = (id, index) => {
    setDeleteConfirm({ show: true, id, index });
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirm.id && deleteConfirm.index !== null) {
      deletePassword(deleteConfirm.id, deleteConfirm.index);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm({ show: false, id: null, index: null });
  };

  const editPassword = (index) => {
    setEditingIndex(index);
    const currentPassword = savedPasswords[index];
    setEditingId(currentPassword._id);
    setUrl(currentPassword.url);
    setUsername(currentPassword.username);
    setPassword(currentPassword.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20 pb-12 px-4">
      <ToastContainer />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Passwords</span>
          </h1>
          <p className="text-gray-300">Manage your passwords securely in one place</p>
        </motion.div>

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Side - Add/Edit Password Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 sticky top-24 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                  <Save size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {editingId ? '✏️ Edit Password' : '➕ Add New Password'}
                </h2>
              </div>

              {/* URL Input */}
              <div className="mb-5">
                <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                  <span className="mr-2">🌐</span>
                  Website URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent focus:bg-white/10 transition-all hover:bg-white/8"
                />
              </div>

              {/* Username Input */}
              <div className="mb-5">
                <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                  <span className="mr-2">👤</span>
                  Username / Email
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent focus:bg-white/10 transition-all hover:bg-white/8"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                  <span className="mr-2">🔒</span>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter strong password"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent focus:bg-white/10 transition-all hover:bg-white/8"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Save Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={savePassword}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Save size={20} />
                <span>{loading ? 'Saving...' : (editingId ? '💾 Update Password' : '💾 Save Password')}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Saved Passwords List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Saved Passwords
                  </h2>
                </div>
                <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-400/30">
                  <span className="font-semibold">{savedPasswords.length}</span> {savedPasswords.length === 1 ? 'Password' : 'Passwords'}
                </div>
              </div>

              {/* Scrollable Passwords List */}
              <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 custom-scrollbar">
                {fetchLoading ? (
                  <div className="text-center py-12">
                    <div className="text-gray-300">Loading passwords...</div>
                  </div>
                ) : savedPasswords.length > 0 ? (
                  savedPasswords.map((data, index) => (
                    <motion.div
                      key={data._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-card bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-5 hover:bg-white/15 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                    >
                      {/* URL */}
                      <div className="mb-3">
                        <div className="flex items-center text-xs text-gray-400 mb-1">
                          <span className="mr-1">🌐</span>
                          Website
                        </div>
                        <div className="flex items-center justify-between group">
                          <span className="text-white truncate flex-1 mr-2 font-medium">{data.url}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyText(data.url)}
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/20 rounded-lg"
                          >
                            <Copy size={16} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Username */}
                      <div className="mb-3">
                        <div className="flex items-center text-xs text-gray-400 mb-1">
                          <span className="mr-1">👤</span>
                          Username
                        </div>
                        <div className="flex items-center justify-between group">
                          <span className="text-white truncate flex-1 mr-2">{data.username}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyText(data.username)}
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/20 rounded-lg"
                          >
                            <Copy size={16} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <div className="flex items-center text-xs text-gray-400 mb-1">
                          <span className="mr-1">🔒</span>
                          Password
                        </div>
                        <div className="flex items-center justify-between group">
                          <span className="text-white truncate flex-1 mr-2 font-mono text-lg tracking-wider">{'•'.repeat(Math.min(data.password.length, 12))}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyText(data.password)}
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/20 rounded-lg"
                          >
                            <Copy size={16} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t border-white/10">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => editPassword(index)}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-400 py-2.5 px-3 rounded-lg transition-all border border-blue-400/20 hover:border-blue-400/40"
                        >
                          <Edit size={16} />
                          <span className="text-sm font-medium">Edit</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDeleteClick(data._id, index)}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 text-red-400 py-2.5 px-3 rounded-lg transition-all border border-red-400/20 hover:border-red-400/40"
                        >
                          <Trash2 size={16} />
                          <span className="text-sm font-medium">Delete</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-2">No passwords saved yet</div>
                    <div className="text-gray-500 text-sm">Add your first password using the form on the left</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteConfirm.show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={handleDeleteCancel}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <Trash2 size={32} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-4">
                  Delete Password?
                </h2>

                {/* Message */}
                <p className="text-gray-300 text-center mb-8">
                  Are you sure you want to delete this password? This action cannot be undone.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDeleteCancel}
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDeleteConfirm}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/50"
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SavedPasswords;