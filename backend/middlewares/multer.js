import multer from 'multer';

// Set up multer storage
const storage = multer.diskStorage({
   
    filename: function (req, file, callback) {
        callback(null, file.originalname); // Keeps the original filename
    }
});

// Create multer instance with storage configuration
const upload = multer({ storage });

export default upload;
