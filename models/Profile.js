const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {
checkPassword(loginPass){
    return bcrypt.compareSync(loginPass, this.password);
}

}


Users.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                
            },
        },
    },
   {
    hooks: {
        beforeCreate: async (newUser) => {
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
        },
        beforeUpdate: async (updateUser) => {
            updateUser.password = await bcrypt.hash(updatedUser.password, 10);
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
   }
);











module.exports = Users;