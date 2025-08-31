import express from 'express';
import { registerUser , loginUser, getProfile } from '../controllers/userController.js';

const userRouter = express.Router();

// POST request for user registration
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',getProfile)

export default userRouter
