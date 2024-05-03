'use strict';

const Author = (sequelize, DataTypes) => sequelize.define('Author', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,  // Disable automatic timestamp generation
});

module.exports = Author;

