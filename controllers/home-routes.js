const router = require('express').Router();

const { Profile, Users} = require('../models');


router.get('/', async (req,res) => {
    res.render('test')
})





module.exports = router;