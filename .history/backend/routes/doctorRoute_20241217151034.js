import express from 'express'
import { doctorList ,loginDoctor, appointmentsDoctor} from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',appointmentsDoctor)
export default doctorRouter