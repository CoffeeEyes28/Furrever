const router = require('express').Router()
const { Image } = require('../../models');

// Cloudinary functionality
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require('dotenv').config()

cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.API_KEY,
api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "images",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });

const parser = multer({ storage: storage });


router.post('/', parser.single('image'), async (req,res) => {
    
    try {
        const findImage = await Image.findOne({
            where: {user_id: 3}
            // req.session.user_id
        })
        console.log(findImage)
        if(!findImage){
        const imageData = await Image.create({
            multimedia_url: req.file.path,
            user_id: 3,
        })
        res.status(200).json(imageData)
        console.log(req.file)
    }else {
        const updateImage = await Image.update({
            multimedia_url: req.file.path
        },
        {
            where: {user_id: 3}
        })
        res.status(200).json(updateImage)
    }
    } catch (error) {
        res.status(500).json(error)
    }
    
    
});








module.exports = router