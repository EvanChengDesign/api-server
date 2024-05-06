const express = require('express');
const router = express.Router();

const { Authors, Books } = require('../models/index.js');

// RESTful route definitions
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

// ROUTE HANDLERS
async function getAll(request, response) {
  try {
    let data = await Authors.read(null, {
      include: [{ model: Books }]  // Ensure Books is directly referred as a Sequelize model
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function getOne(request, response) {
  let id = request.params.id;
  try {
    let data = await Authors.read(id, {
      include: [{ model: Books }]  // Ensure Books is directly referred as a Sequelize model
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function createRecord(request, response) {
  let data = request.body;
  try {
    let newRecord = await Authors.create(data);
    response.status(201).json(newRecord);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function updateRecord(request, response) {
  let id = request.params.id;
  let data = request.body;
  try {
    let updatedRecord = await Authors.update(id, data);
    response.status(200).json(updatedRecord);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

async function deleteRecord(request, response) {
  let id = request.params.id;
  try {
    let deletedRecord = await Authors.delete(id);
    if (deletedRecord) {
      response.status(200).json({ message: 'Author deleted successfully' });
    } else {
      response.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

module.exports = router;
