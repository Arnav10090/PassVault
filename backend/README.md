# PassVault Backend

Backend API for PassVault password manager built with Node.js, Express.js, and MongoDB.

## Features

- 🔐 **Secure Password Storage**: AES encryption for all passwords
- 🚀 **RESTful API**: Clean and intuitive endpoints
- ✅ **Input Validation**: Comprehensive validation using express-validator
- 🛡️ **Security Headers**: Helmet.js for enhanced security
- 🔄 **CORS Enabled**: Cross-origin resource sharing configured
- 📊 **MongoDB Integration**: Mongoose ODM for database operations

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Copy `.env.example` to `.env` (or create `.env`)
   - Update the following variables:
     ```env
     MONGODB_URI=mongodb://localhost:27017/passvault
     PORT=5000
     ENCRYPTION_KEY=your-secret-encryption-key-change-this-in-production
     NODE_ENV=development
     ```

## MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/passvault`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string from Atlas dashboard
4. Update `MONGODB_URI` in `.env`

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```http
GET /api/health
```
Returns server status

### Get All Passwords
```http
GET /api/passwords
```
Returns array of all saved passwords

### Create Password
```http
POST /api/passwords
Content-Type: application/json

{
  "url": "https://example.com",
  "username": "user@example.com",
  "password": "mypassword123"
}
```

### Update Password
```http
PUT /api/passwords/:id
Content-Type: application/json

{
  "url": "https://example.com",
  "username": "newuser@example.com",
  "password": "newpassword123"
}
```

### Delete Password
```http
DELETE /api/passwords/:id
```

## Security

- Passwords are encrypted using AES encryption before storage
- Helmet.js provides security headers
- CORS is configured for cross-origin requests
- Input validation prevents malicious data
- Environment variables protect sensitive configuration

## Project Structure

```
backend/
├── models/
│   └── Password.js       # Mongoose schema with encryption
├── routes/
│   └── passwordRoutes.js # API route handlers
├── server.js             # Express app entry point
├── .env                  # Environment configuration
├── .gitignore           # Git ignore rules
└── package.json         # Dependencies and scripts
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access (for MongoDB Atlas)

### Port Already in Use
- Change `PORT` in `.env` to a different port
- Stop any process using port 5000

### CORS Error
- Ensure frontend is making requests to correct URL
- Check CORS configuration in `server.js`

## Future Enhancements

- [ ] User authentication with JWT
- [ ] Master password for additional encryption
- [ ] Password strength meter
- [ ] Password generation API
- [ ] Export/import functionality
- [ ] Two-factor authentication

## License

MIT
