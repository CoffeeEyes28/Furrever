const router = require('express').Router();
const { Users, Profile, Post } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const animal_profiles = await Profile.findAll({
      attributes: {
        exclude: [
          'animal_type', 
          'age', 
          'breed_mix', 
          'personality_quirks', 
          'furry_family', 
          'date_fostered',
          'email',
          'diet',
          'kids',
          'dog',
          'cat',
          'neutered_spayed',
          'vaxed',
          'i_love',
          'adopt_me_url',
        ],
       
      },
    });
    const profiles = animal_profiles.map((profile)=> profile.get({plain:true}))
    // res.status(200).json(animal_profiles);
    res.render('hometest', {
      profiles,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


// Working
router.get('/profile/:user_id', async (req, res) => {
  try {
    const profile_postId = await Users.findByPk(req.params.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: Post },{ model: Profile }],
    });
    res.status(200).json(profile_postId);
  } catch (err) {
    res.status(400).json(err); 
  }
});

router.get('/create', (req, res) =>{
  try {
    res.render('createProfileTest')
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;


