// routes/animals.js
'use strict';

const express = require('express');
const router = express.Router();
const { Animal } = require('../models/index');


// GET all animals
router.get('/animals', async (req, res, next) => {
  try {
    const animals = await Animal.findAll();
    console.log('animals', animals);
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
});

// GET a single animal by id
router.get('/animals/:id', async (req, res, next) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).send('Animal not found');
    }
  } catch (error) {
    next(error);
  }
});

// POST a new animal
router.post('/animals', async (req, res, next) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (error) {
    next(error);
  }
});

// PUT update an animal
router.put('/animals/:id', async (req, res, next) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (animal) {
      await animal.update(req.body);
      res.status(200).json(animal);
    } else {
      res.status(404).send('Animal not found');
    }
  } catch (error) {
    next(error);
  }
});

// DELETE an animal
router.delete('/animals/:id', async (req, res, next) => {
  try {
    const result = await Animal.destroy({ where: { animal_id: req.params.id } });
    res.status(200).send(`Deleted ${result} item(s)`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
