const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rsvp = sequelize.define('rsvp', {
    guestName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    guestCount: DataTypes.STRING,
    guestStatus: DataTypes.STRING
},
{
    underscored: true,
    timestamps: false,
    freezeTableName: true
});

module.exports = Rsvp