import express from 'express'
import { registerUser } from '../controllers/userController.js'

const doctorRouter = express.Router()

doctorRouter.get('/register',doctorList)

export default doctorRouter