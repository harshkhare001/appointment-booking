const  Sequelize = require('sequelize');

const sequelize = new Sequelize('book-appointment', 'root', 'hulk@123', {dialect:'mysql', host:'localhost'});

module.exports = sequelize;
