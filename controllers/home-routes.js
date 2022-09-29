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

// Alternative (original)
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



router.get('/profile', async (req, res) => {
  try {
    const userData = await Profile.findByPk(req.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post,
       attributes: [
        'id', 'media', 'caption',
       ]}],
    });

    const user = userData.get({ plain: true });

    res.json('profile', {
      ...user,
  
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile/:id', (req, res) => {
  Profile.findByPk(req.params.id).then((profileData) => {
    res.json(profileData);
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;




// router.get('/login', (req, res) => {
//   Profile.findAll().then((profileData) => {
//     res.json(profileData);
//   });
// });

// router.get('/', (req, res) => {
//   // TODO: Add a comment describing the functionality of this method
//   Profile.findAll().then((profileData) => {
//     res.json(profileData);
//   });
// });

// router.get('/', async (req, res) => {
//   try {
//     // Get all users and JOIN with user data
//     const usersData = await Users.findAll({
//       include: [
//         {
//           model: Users,
//           attributes: ['name', 'picture'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const users = userstData.map((users) => users.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('home', { 
//       users, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile/:id', async (req, res) => {
//   try {
//     const usersData = await Users.findByPk(req.params.id, {
//       include: [
//         {
//           model: Users,
//           attributes: ['name', 'picture'],
//         },
//       ],
//     });

//     const users = userstData.get({ plain: true });

//     res.render('users', {
//       ...profile,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
