'use strict';

let foodData = {
  1: { name: 'Apple', type: 'Fruit' },
  2: { name: 'Carrot', type: 'Vegetable' },
};

function findAll() {
  return Object.values(foodData);
}

function findOne(id) {
  return foodData[id];
}

function create(record) {
  record.id = Math.random();
  foodData[record.id] = record;
  return foodData[record.id];
}

function update(id, record) {
  foodData[id] = record;
  return foodData[id];
}

function destroy(id) {
  delete foodData[id];
  return foodData[id];
}

module.exports = { findAll, findOne, create, update, destroy };
