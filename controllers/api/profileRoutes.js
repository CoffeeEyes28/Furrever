const router = require('express').Router();
const { Profile, Users, Post, Image } = require('../../models');
const withAuth = require('../../utils/auth');


// Get route gets all profiles
router.get('/', async (req, res) => {
    // find all profiles
    try {
        const profileData = await Profile.findAll({
            // include: [{ model: Users }, { model: Post }, { model: Image }],
        });
        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get route gets one profile using the profile id
router.get('/:id', async (req, res) => {
    // find a single profile by its `id`
    try {
        const profileData = await Profile.findByPk(req.params.id, {
            // include: [{ model: Users }, { model: Post }, { model: Image }],
        });

        if (!profileData) {
            res.status(404).json({ message: 'No profile found with that id!' });
            return;
        }

        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// Post route allows the user to create new profile
router.post('/', async (req, res) => {
    console.log(req.body)
    // create a new Profile
    try {
        const newProfile = await Profile.create({
            animal_type: req.body.animal_type,
            name: req.body.name,
            age: req.body.age,
            breed_mix: req.body.breed_mix,
            personality_quirks: req.body.personality_quirks,
            furry_family: req.body.furry_family,
            date_fostered: req.body.date_fostered,
            email: req.body.email,
            diet: req.body.diet,
            kids: req.body.kids,
            dog: req.body.dog,
            cat: req.body.cat,
            neutered_spayed: req.body.neutered_spayed,
            vaxed: req.body.vaxed,
            i_love: req.body.i_love,
            adopt_me_url: req.body.adopt_me_url,
            user_id: req.session.user_id
        });
        res.status(200).json(newProfile);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Put route allows to update a profile using the id
router.put('/:id', async (req, res) => {
    // update product data
    try{
        const profileData = await Profile.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!profileData[0]) {
            res.status(404).json({ message: 'No Profile with this id!' });
            return;
        }
        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }   
});


//Delete route allows to delete a profile using the id
router.delete('/:id', async (req, res) => {
    // delete one profile by its `id` value
    try {
        const profileData = await Profile.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!profileData) {
            res.status(404).json({ message: 'No profile found with that id!' });
            return;
        }

        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
