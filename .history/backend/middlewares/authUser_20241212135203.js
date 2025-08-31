import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers; 
        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login Again" }); // Correct syntax
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET); 

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized login again" }); // Correct syntax
        }
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
}}

export default authUser
