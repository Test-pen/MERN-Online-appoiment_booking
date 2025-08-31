import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers; // Correct destructuring
        if (!atoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" }); // Correct syntax
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET); // Correct usage
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized login again" }); // Correct syntax
        }
        next(); // Missing call to next middleware
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message }); // Correct syntax
    }
};

export default authAdmin;
