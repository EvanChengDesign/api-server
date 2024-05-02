// routes/foods.js
'use strict';

const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

// GET all foods
router.get('/foods', async (req, res, next) => {
  try {
    const foods = await Food.findAll();
    console.log('food', foods);
    res.status(200).json(foods);
  } catch (error) {
    next(error);
  }
});

// GET a single food by id
router.get('/foods/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).send('Food not found');
    }
  } catch (error) {
    next(error);
  }
});

// POST a new food
router.post('/foods', async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
});

// PUT update a food
router.put('/foods/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      await food.update(req.body);
      res.status(200).json(food);
    } else {
      res.status(404).send('Food not found');
    }
  } catch (error) {
    next(error);
  }
});

// DELETE a food
router.delete('/foods/:id', async (req, res, next) => {
  try {
    const result = await Food.destroy({ where: { food_id: req.params.id } });
    res.status(200).send(`Deleted ${result} item(s)`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
