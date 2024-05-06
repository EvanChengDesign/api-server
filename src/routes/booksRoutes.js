'use strict';

// All routing and data management for "books"

const express = require('express');
const router = express.Router();

const { Authors } = require('../models/index.js');  // Adjusting model imports
const { Books } = require('../models/index.js'); // Adjust the path as necessary

const Model = Books;  // Focusing on Books model

// RESTful route definitions
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

// ROUTE HANDLERS
async function getAll(request, response) {
  try {
    let data = await Model.findAll({
      include: [{ model: Authors.model, attributes: ['id', 'firstName', 'lastName'] }],
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}



async function getOne(request, response) {
  let id = request.params.id;
  try {
    let data = await Model.findByPk(id, {
      include: [{ model: Authors.model, attributes: ['id', 'firstName', 'lastName'] }],
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}


async function createRecord(request, response) {
  let data = request.body;
  try {
    let newRecord = await Model.create(data);
    response.status(201).json(newRecord);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function updateRecord(request, response) {
  let id = request.params.id;
  let data = request.body;
  try {
    let updatedRecord = await Model.update(data, {
      where: { id: id },
    });
    response.status(200).json(updatedRecord);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function deleteRecord(request, response) {
  let id = request.params.id;
  try {
    let deletedRecord = await Model.destroy({
      where: { id: id },
    });
    if (deletedRecord === 1) {
      // Book was successfully deleted
      response.status(200).json({ message: 'Book deleted successfully' });
    } else {
      // Book with the specified id was not found
      response.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    // Internal server error occurred
    response.status(500).json({ error: error.message });
  }
}

module.exports = router;
