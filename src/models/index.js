// models/index.js
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const foodModel = require('./food.js');
const animalModel = require('./animal.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
console.log('Database URL:', DATABASE_URL);

let sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = {
  db: sequelize,
  Food: foodModel(sequelize, DataTypes),
  Animal: animalModel(sequelize, DataTypes),
};
