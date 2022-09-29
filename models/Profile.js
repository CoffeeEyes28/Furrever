
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed_mix: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 100],
            }

        },
        personality_quirks: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 200],
            }

        },

        furry_family: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        date_fostered: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        diet: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 400],
            }

        },
        kids: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        dog: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
        cat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
        neutered_spayed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
        vaxed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        },
        i_love: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 400],
            }

        },
        adopt_me_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            }


        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile',
    }
);

module.exports = Profile;



