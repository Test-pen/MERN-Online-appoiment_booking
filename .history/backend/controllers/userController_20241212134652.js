import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all required fields are provided
        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        // Validate strong password (at least 8 characters)
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password (at least 8 characters)" });
        }

        // Check if the email is already in use
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Email already in use" });
        }

        // Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Prepare user data to be saved
        const userData = {
            name,
            email,
            password: hashedPassword,
        };

        // Create a new user instance and save it to the database
        const newUser = new userModel(userData);
        const user = await newUser.save();

        // Create a JWT token for the new user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send success response with the token
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}
//API for user login
const loginUser =  async (req,res) => {
    try {
        const{email,password} = req.body
        const user = await userModel.findOne({email})
        if(!user) {
             return res.json({ success: false, message: 'user does not exist' })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true,token})
        } else {
            res.json({success:false, message:"password doesnt match"})
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
        
    }
}
//API TO GET USER PROFILE DATA
const getProfile = async (req,res) => {
    try {
        const {userId} = req.body
        
    } catch (error) {
        
    }
}

export { registerUser , loginUser}

