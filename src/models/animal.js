// models/animal.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    animal_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    habitat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,  // Disable Sequelize's automatic timestamping
  });

  return Animal;
};
