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
});

module.exports = Author;
