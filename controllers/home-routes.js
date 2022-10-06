const router = require('express').Router();
const { Users, Profile, Post, Image } = require('../models');
// const withAuth = require('../utils/auth');

// Get route allows to search for a profile created by a user excluding certain fields
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

// Get route allows to find a user by the primary key and retreive the data from the Profile model, Post model, Image model, but excluding the password
router.get('/profile', async(req,res)=>{
  try {
    const currentProfile = await Users.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{model: Profile}, {model: Post}, {model: Image}],
    });
    const loggedIn = req.session.logged_in
    const user = req.session.user_id
    const thisProfile = currentProfile.get({plain: true})
    console.log(thisProfile)

    
    
    const findProfile = await Profile.findOne({where: {user_id: req.session.user_id}})
    if(!findProfile) {
      // If the user does not have a profile then they will be redirected to create one
      res.redirect('/create')
    }else {

      // If the user has a profile then it will be rendered
      res.render('profile', {
        thisProfile, 
        loggedIn,
      user,
    })
        
      }
    

     
  } catch (err) {
    res.status(500).json(err)
  }
})


// Get route uses the profile id to render the profile of the user who is logged in
router.get('/profile/:user_id', async (req, res) => {
  try {
    const profile_postId = await Users.findByPk(req.params.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: Post },{ model: Profile }, {model: Image}],
    });
    const thisProfile = profile_postId.get({plain: true})
    const loggedIn = req.session.logged_in
    const user = Number(req.session.user_id)
    const param = Number(req.params.user_id)
    console.log('param: ' ,req.params.user_id)
    console.log(user)

    if(user !== param){
      res.render('theirProfile', {
        thisProfile,
        loggedIn,
        
      })
    }else{
   res.render('profile',{
    thisProfile,
    loggedIn,
  
   
   });
  }
  
  } catch (err) {
    res.status(400).json(err); 
  }
});


// Get route allows the logged in user to render their created profile based on session ID
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

// Or redirect to the signup page
router.get('/signup', (req, res)=>{
  if(req.session.logged_in){
    res.redirect('/');
    return;
  }
  res.render('signup')
})



module.exports = router;


