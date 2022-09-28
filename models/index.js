const Users = require('./Users');
const Profile = require('./Profile');
const Image = require('./Image');
const Post = require('./Post');

Users.hasOne(Profile,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Post,{
    foreignKey: 'user_id',
});

Users.hasOne(Image,{
    foreignKey: 'user_id'
});

Profile.belongsTo(Users,{
    foreignKey: 'user_id'
});

Image.belongsTo(Users,{
    foreignKey: 'user_id'
 });

 Post.belongsTo(Users,{
     foreignKey: 'user_id',
 });




 module.exports= { Users, Profile, Image, Post };


