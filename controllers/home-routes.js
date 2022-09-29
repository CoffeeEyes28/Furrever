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
    res.status(200).json(animal_profiles);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Alternative (original and working in insomnia)
// router.get('/', (req, res) => {
//   Profile.findAll({
//     attributes: {
//       exclude: [
//       'animal_type', 
//       'age', 
//       'breed_mix', 
//       'personality_quirks', 
//       'furry_family', 
//       'date_fostered',
//       'email',
//       'diet',
//       'kids',
//       'dog',
//       'cat',
//       'neutered_spayed',
//       'vaxed',
//       'i_love',
//       'adopt_me_url',
//     ]
//     }
//   }).then((profileData) => {
//   res.json(profileData);
//   });
// });

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

// Working in insomnia
// router.get('/profile/:id', (req, res) => {
//   Profile.findByPk(req.params.id).then((profileData) => {
//     res.json(profileData);
//   });
// });

// Working in insomnia
// router.get('/user/:id', (req, res) => {
//   Users.findByPk(req.params.id).then((userData) => {
//     res.json(userData);
//   });
// });

// Working in insomnia
// router.get('/post/:id', (req, res) => {
//   Post.findByPk(req.params.id).then((postData) => {
//     res.json(postData);
//   });
// });

// Working (adds user 2 to complete profile of user 1)
// router.get('/:id', async (req, res) => {
//   try {
//     const profile_userId = await Profile.findByPk(req.params.id, {
//       include: [{ model: Users }],
//     });
//     res.status(200).json(profile_userId);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Working
// router.get('/:id', async (req, res) => {
//   try {
//     const user_postId = await Users.findByPk(req.params.id, {
//       include: [{ model: Post }],
//     });
//     res.status(200).json(user_postId);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Working
// router.get('/:id', async (req, res) => {
//   try {
//     const user_profileId = await Users.findByPk(req.params.id, {
//       include: [{ model: Profile }],
//     });
//     res.status(200).json(user_profileId);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Working but wrong pet to user
// router.get('/:id', async (req, res) => {
//   try {
//     const post_userId = await Post.findByPk(req.params.id, {
//       include: [{ model: Users }],
//     });
//     res.status(200).json(post_userId);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Not Working
// router.get('/:id', async (req, res) => {
//   try {
//     const post_profileId = await Post.findByPk(req.params.id, {
//       include: [{ model: Profile }],
//     });
//     res.status(200).json(post_profileId);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Not working
// router.get('/profile/:id', async (req, res) => {
//   try {
//     const profileData = await Profile.findByPk(req.params.id, {
//       include: [
//         { 
//           model: Post,
//           attributes: [
//             'id',
//             'media',
//             'caption',
//             'user_id',
//           ]
//         }],
//     });
//     res.status(200).json(profileData);
//   } catch (err) {
//     res.status(400).json(err); 
//   }
// });

// Not working
// router.get('/profile', async (req, res) => {
//   try {
//     const userData = await Profile.findByPk(req.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post,
//        attributes: [
//         'id', 'media', 'caption',
//        ]}],
//     });

//     const user = userData.get({ plain: true });

//     res.json('profile', {
//       ...user,
  
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Not working
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect to the homepage
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   // Otherwise, render the 'login' template
//   res.render('login');
// });

module.exports = router;


