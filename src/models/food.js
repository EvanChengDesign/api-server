'use strict';

// models/food.js
const { timeStamp } = require('console');

module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,  // Correct placement of the timestamps option
  });

  return Food;
};
