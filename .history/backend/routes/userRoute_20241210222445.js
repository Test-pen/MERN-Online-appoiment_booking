import express from 'express';
import { registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// POST request for user registration
userRouter.post('/register', registerUser);

export default userRouter
