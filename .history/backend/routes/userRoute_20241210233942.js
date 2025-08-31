import express from 'express';
import { registerUser , loginUser } from '../controllers/userController.js';

const userRouter = express.Router();

// POST request for user registration
userRouter.post('/register', registerUser)
userRouter.post('/login', registerUser)

export default userRouter
