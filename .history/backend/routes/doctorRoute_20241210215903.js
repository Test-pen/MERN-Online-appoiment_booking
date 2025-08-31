import express from 'express'
import { doctorList } from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/register',doctorList)
export default doctorRouter