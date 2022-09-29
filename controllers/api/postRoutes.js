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

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      media: req.body.media,
      caption: req.body.caption,
      user_id: req.session.user_id,
    });
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
