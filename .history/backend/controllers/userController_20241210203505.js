import validator from "validator"


//API to register user
const registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body
        if( !name || !password || !email) {
            return res.json({success:false, message:"Missing Details"})
        }
        if((!validator.isEmail(email)) {
            return res.json({success:false,message:"Enter a valid email"})
        })

    } catch (error) {

    }
}