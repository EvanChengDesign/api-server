'use strict';

let animalData = {
  1: { name: 'Lion', habitat: 'Savannah' },
  2: { name: 'Penguin', habitat: 'Antarctica' },
};

function findAll() {
  return Object.values(animalData);
}

function findOne(id) {
  return animalData[id];
}

function create(record) {
  record.id = Math.random();
  animalData[record.id] = record;
  return animalData[record.id];
}

function update(id, record) {
  animalData[id] = record;
  return animalData[id];
}

function destroy(id) {
  delete animalData[id];
  return animalData[id];
}

module.exports = { findAll, findOne, create, update, destroy };
