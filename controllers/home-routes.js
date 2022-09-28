const router = require('express').Router();
const { Users, Profile } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // TODO: Add a comment describing the functionality of this method
  Users.findAll().then((usersData) => {
    res.json(usersData);
  });
});

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
