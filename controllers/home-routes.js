const router = require('express').Router();

const { Profile, Users, Post } = require('../models');

router.get('/profile/:id', async (req, res) => {
    try {
      const profile_postId = await Users.findByPk(req.params.id, {
        attributes: { exclude: ['password']},
        include: [{ model: Post },{ model: Profile }],
      });
      res.status(200).json(profile_postId);
    } catch (err) {
      res.status(400).json(err); 
    }
  });






module.exports = router;