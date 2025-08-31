import express from 'express'
import { registerUser } from '../controllers/userController'

const doctorRouter = express.Router()

doctorRouter.get('/register',doctorList)
export default doctorRouter