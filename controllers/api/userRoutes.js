const router = require('express').Router();
const { Users, Profile } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({where: {email: req.body.email} });
        if(!userData){
            res.status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log('validPassword')

        if (!validPassword) {
            res.status(400)
                .json({ message: "Incorrect email or password, please try again" });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: "You are now logged in!"})
        })

        //check profile table , find any profiles id with the same user_id, if that is true redirect to dashboard, if false redirect profile page to create one
        // const profileData = await Profile.findAll({where: {user_id: userData.id }});
        // if(!profileData){
        //     res.render('profile', req.session.logged_in)
        // } else res.render('hometest', {
        //     profileData,
        //     logged_in: req.session.logged_in
        // })



      
    } catch (err) {
        res.status(400).json(err)
    }
});

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