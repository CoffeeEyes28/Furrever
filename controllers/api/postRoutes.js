const router = require("express").Router();

const { Profile, Post, Users } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


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

const storage2 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
    folder: "posts",
    format: 'png',
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    },
});

const parser = multer({storage: storage2});


router.post("/photo", parser.single('image'), async (req, res) => {
  try {
    const postData = await Post.create({
      media: req.file.path,
      caption: req.body.caption,
      user_id: 2,
    });
    console.log(postData)
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/text", async (req, res) => {
  try {
    const postData = await Post.create({
      caption: req.body.caption,
      user_id: 2,
    });
    console.log(postData)
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  Post.update(
    {
      caption: req.body.caption,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPost) => {
      res.status(200).json(updatedPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
