const router = require('express').Router();
const { Users, Profile, Post, Image } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log(req.session.logged_in)
  try {
    const animal_profiles = await Users.findAll({
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
      include:[{model: Profile}, {model: Image}]
    });
    const profiles = animal_profiles.map((profile)=> profile.get({plain:true}))
    // console.log(profiles)
   const loggedIn = req.session.logged_in
    // res.status(200).json(animal_profiles);
    res.render('home', {
      profiles,
      loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/profile', async(req,res)=>{
  try {
    const currentProfile = await Users.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{model: Profile}, {model: Post}, {model: Image}],
    });
    const loggedIn = req.session.logged_in
    const thisProfile = currentProfile.get({plain: true})
    console.log(thisProfile)
    res.render('profile', {
    thisProfile, 
  loggedIn})

  } catch (err) {
    res.status(500).json(err)
  }
})


// Working
router.get('/profile/:user_id', async (req, res) => {
  try {
    const profile_postId = await Users.findByPk(req.params.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: Post },{ model: Profile }, {model: Image}],
    });
    const thisProfile = profile_postId.get({plain: true})
    const loggedIn = req.session.logged_in
   res.render('profile',{
    thisProfile,
    loggedIn
   })
  } catch (err) {
    res.status(400).json(err); 
  }
});



router.get('/create', (req, res) =>{
  console.log(req.session.user_id)
  try {
    const loggedIn = req.session.logged_in
    res.render('createProfile',{
      loggedIn
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/signup', (req, res)=>{
  if(req.session.logged_in){
    res.redirect('/');
    return;
  }
  res.render('signup')
})



module.exports = router;


