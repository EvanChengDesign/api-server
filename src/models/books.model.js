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
      model: 'Authors', // Ensure this matches the table name as Sequelize sees it
      key: 'id',
    },
  },
}, {
  timestamps: false,  // Disable automatic timestamp generation
});

module.exports = Books;
