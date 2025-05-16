# Secure REST API with Node.js, Express, MongoDB, and JWT

A step-by-step tutorial project for building a secure RESTful API using Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT). Includes user authentication, role-based authorization, input validation, and protected CRUD routes.

📘 **Read the full tutorial on Djamware →**  
[Build a Secure REST API with Node.js, Express, MongoDB, and JWT](https://www.djamware.com/post/6826fc85f9614f0a093d9cba/build-a-secure-rest-api-with-nodejs-express-mongodb-and-jwt)

## 🔐 Features

- User Registration & Login with hashed passwords
- JWT-based Authentication
- Role-based Authorization (Admin/User)
- Protected CRUD routes (e.g., Posts)
- Input Validation using Joi
- MongoDB integration via Mongoose
- CORS-enabled API for frontend consumption

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Joi (for input validation)
- Dotenv, CORS

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/secure-node-api.git
cd secure-node-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env file

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/secure-node-api
JWT_SECRET=your_jwt_secret
```

### 4. Run the server

```bash
npm start
```

## API Endpoints

### 🔑 Auth

* POST ```/api/auth/register``` – Register a new user

* POST ```/api/auth/login``` – Login and get a token

### 📝 Posts (Protected)
* GET ```/api/posts``` – Get user's posts

* POST ```/api/posts``` – Create a post

* PUT ```/api/posts/:id``` – Update a post

* DELETE ```/api/posts/:id``` – Delete a post

Add ```Authorization: Bearer <token>``` header to access protected routes.

### 🛡 Admin Only (Example)

* GET ```/api/posts/admin-only``` – Admin access route


## ✅ License
This project is open-source and available under the [MIT License](LICENSE).
