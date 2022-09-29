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
        const imageData = await Image.create({
            multimedia_url: req.body.multimedia_url,
        })
        res.status(200).json(imageData)
    } catch (error) {
        res.status(500).json(error)
    }
    
    
});








module.exports = router