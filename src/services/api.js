// API base URL - adjust based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Helper function to get auth headers
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

/**
 * Helper function to handle fetch responses
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * API Service for password management and authentication
 */
const api = {
  // ========== Authentication APIs ==========
  
  /**
   * Sign up new user
   * @param {string} name - User name
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} User and token
   */
  signup: async (name, email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  },

  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} User and token
   */
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  /**
   * Get current user info
   * @param {string} token - JWT token
   * @returns {Promise<Object>} User info
   */
  getCurrentUser: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error getting current user:', error);
      throw error;
    }
  },

  // ========== Password Management APIs ==========

  /**
   * Get all passwords
   * @returns {Promise<Array>} Array of password objects
   */
  getPasswords: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/passwords`, {
        headers: getAuthHeaders()
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching passwords:', error);
      throw error;
    }
  },

  /**
   * Create a new password
   * @param {Object} passwordData - { url, username, password }
   * @returns {Promise<Object>} Created password object
   */
  createPassword: async (passwordData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/passwords`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(passwordData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error creating password:', error);
      throw error;
    }
  },

  /**
   * Update an existing password
   * @param {string} id - Password ID
   * @param {Object} passwordData - { url, username, password }
   * @returns {Promise<Object>} Updated password object
   */
  updatePassword: async (id, passwordData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/passwords/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(passwordData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  },

  /**
   * Delete a password
   * @param {string} id - Password ID
   * @returns {Promise<Object>} Deletion confirmation
   */
  deletePassword: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/passwords/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error deleting password:', error);
      throw error;
    }
  },

  /**
   * Health check
   * @returns {Promise<Object>} Health status
   */
  healthCheck: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error checking health:', error);
      throw error;
    }
  },
};

export default api;
