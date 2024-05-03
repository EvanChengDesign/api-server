'use strict';

const Books = (sequelize, DataTypes) => sequelize.define('Books', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Authors',
      key: 'id',
    },
  },
});

module.exports = Books;
