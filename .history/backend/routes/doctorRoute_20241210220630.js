import express from 'express';
import { registerUser } from '../controllers/userController.js';

const doctorRouter = express.Router();

// Use POST method for user registration
doctorRouter.post('/register', registerUser);

export default doctorRouter;
