import mongoose from 'mongoose';
import CryptoJS from 'crypto-js';

const passwordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  url: {
    type: String,
    required: [true, 'Website URL is required'],
    trim: true,
    maxlength: [500, 'URL cannot exceed 500 characters']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    maxlength: [100, 'Username cannot exceed 100 characters']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Encrypt password before saving
passwordSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    const encryptionKey = process.env.ENCRYPTION_KEY || 'default-key';
    this.password = CryptoJS.AES.encrypt(this.password, encryptionKey).toString();
  }
  next();
});

// Method to decrypt password
passwordSchema.methods.decryptPassword = function() {
  const encryptionKey = process.env.ENCRYPTION_KEY || 'default-key';
  const bytes = CryptoJS.AES.decrypt(this.password, encryptionKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Transform output to include decrypted password
passwordSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.password = this.decryptPassword();
  return obj;
};

const Password = mongoose.model('Password', passwordSchema);

export default Password;
