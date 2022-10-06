const router = require('express').Router();
const { Users, Profile } = require('../../models');

// Post route allows to create a user 
router.post('/', async (req,res) => {
    try {
        const userData = await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            //Find the logged in user based on the session ID
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

// Post route allows user to login
router.post('/login', async (req,res) => {
    try {
        const userData = await Users.findOne({where: {email: req.body.email} });
        if(!userData){
            res.status(400)
            .json({message: 'Incorrect username or password, please try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        if(!validPassword){
            res.status(400)
            .json({message: "Incorrect email or password, please try again"});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: "You are now logged in!"})
        })

    } catch (err) {
        res.status(400).json(err)
    }
});

// Post route allows user to logout and destroys the session ID
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });















module.exports = router;