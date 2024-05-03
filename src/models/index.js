// models/index.js
'use strict';
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
console.log('Database URL:', DATABASE_URL);


const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const Collection = require('./collection.js');
const authorSchema = require('./authors.model.js');
const bookSchema = require('./books.model.js');
const foodModel = require('./food.js');
const animalModel = require('./animal.js');

const authorsModel = authorSchema(sequelize, DataTypes);
const booksModel = bookSchema(sequelize, DataTypes);

// foreign key is the column name in the child table that references the sourceKey in the parent table
authorsModel.hasMany(booksModel, {foreignKey: 'authorId', sourceKey: 'id'});
booksModel.belongsTo(authorsModel, {foreignKey: 'authorId', targetKey: 'id'});

const authorsCollection = new Collection(authorsModel);
const booksCollection = new Collection(booksModel);

module.exports = {
  db: sequelize,
  Authors: authorsCollection,
  Books: booksCollection,
  Food: foodModel(sequelize, DataTypes),
  Animal: animalModel(sequelize, DataTypes),
};
