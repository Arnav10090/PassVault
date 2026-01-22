import express from 'express';
import { body, validationResult } from 'express-validator';
import Password from '../models/Password.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const passwordValidation = [
  body('url')
    .trim()
    .notEmpty().withMessage('URL is required')
    .isLength({ max: 500 }).withMessage('URL cannot exceed 500 characters'),
  body('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ max: 100 }).withMessage('Username cannot exceed 100 characters'),
  body('password')
    .notEmpty().withMessage('Password is required')
];

// GET /api/passwords - Get all passwords for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const passwords = await Password.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(passwords);
  } catch (error) {
    console.error('Error fetching passwords:', error);
    res.status(500).json({ message: 'Error fetching passwords', error: error.message });
  }
});

// POST /api/passwords - Create new password
router.post('/', auth, passwordValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { url, username, password } = req.body;
    
    const newPassword = new Password({
      userId: req.user._id,
      url,
      username,
      password
    });

    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    console.error('Error creating password:', error);
    res.status(500).json({ message: 'Error creating password', error: error.message });
  }
});

// PUT /api/passwords/:id - Update password
router.put('/:id', auth, passwordValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { url, username, password } = req.body;

    const updatedPassword = await Password.findOne({ _id: id, userId: req.user._id });
    
    if (!updatedPassword) {
      return res.status(404).json({ message: 'Password not found or unauthorized' });
    }

    updatedPassword.url = url;
    updatedPassword.username = username;
    updatedPassword.password = password;

    await updatedPassword.save();
    res.json(updatedPassword);
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Error updating password', error: error.message });
  }
});

// DELETE /api/passwords/:id - Delete password
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedPassword = await Password.findOneAndDelete({ _id: id, userId: req.user._id });
    
    if (!deletedPassword) {
      return res.status(404).json({ message: 'Password not found or unauthorized' });
    }

    res.json({ message: 'Password deleted successfully', id });
  } catch (error) {
    console.error('Error deleting password:', error);
    res.status(500).json({ message: 'Error deleting password', error: error.message });
  }
});

export default router;
