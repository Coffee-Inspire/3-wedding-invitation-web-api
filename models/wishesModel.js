const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Wishes = sequelize.define('wishes', {
    name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    wish: {
        type: DataTypes.STRING,
        allowNull : false
    },
},
{
    underscored: true,
    timestamps: false,
    freezeTableName: true
});

module.exports = Wishes