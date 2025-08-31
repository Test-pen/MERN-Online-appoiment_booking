import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: false },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true }, // Changed to Number
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true }, // Changed to Number
    address: {
        line1: { type: String, required: true },
        line2: { type: String, required: true }
    }, // Changed to object
    date: { type: Date, required: true }, // Changed to Date
    slots_booked: { type: Object, default: {} }
}, { minimize: false });

const doctorModel = mongoose.models.doctors || mongoose.model('doctors', doctorSchema);

export default doctorModel;


