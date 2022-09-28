const sequelize = require('../config/connection');
const { Users, Profile, Post, Image } = require('../models');

const usersData = require('./usersData.json');
const profileData = require('./profileData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true});

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

const profiles = await Profile.bulkCreate(profileData, {
    individualHooks: true,
    returning: true
});

const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true
});

process.exit(0);
}

seedDatabase();