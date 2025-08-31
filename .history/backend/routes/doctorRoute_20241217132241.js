import express from 'express'
import { doctorList ,loginDoctor} from '../controllers/doctorController.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
export default doctorRouter