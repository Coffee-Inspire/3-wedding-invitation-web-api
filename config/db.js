require("dotenv").config();
const { Sequelize } = require('sequelize');

const host = process.env.DATABASE_HOST || "localhost";

const sequelize = new Sequelize({
    host: host,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    dialect: 'postgres',
    dialectOptions: { 
    ssl: { 
         require: true,
         rejectUnauthorized: false
    }
    }
})

module.exports = sequelize;