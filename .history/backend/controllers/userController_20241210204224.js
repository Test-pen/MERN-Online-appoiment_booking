import validator from "validator"
import bcrypt from 'bcrypt'


//API to register user
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body
        if( !name || !password || !email) {
            return res.json({success:false, message:"Missing Details"})
        }
        //validating email format 
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Enter a valid email"})
        }
        //validating strong password
        if (password.length<8) {
            return res.json({success:false,message:"Enter a strong password"})
            
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassowrd = await bcrypt.hash(password,salt)


    } catch (error) {

    }
}