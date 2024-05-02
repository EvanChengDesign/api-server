'use strict';

require('dotenv').config();
const supertest = require('supertest');
const { app } = require('../server.js');

const mockRequest = supertest(app);
const { db } = require('../models/index.js');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('API Server', () => {

  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 when errors are thrown', async () => {
    const response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  });

  // Tests for foods
  describe('Foods API', () => {
    it('can add a food record', async () => {
      const foodData = { name: 'Apple', type: 'Fruit' };
      const response = await mockRequest.post('/foods').send(foodData);
      expect(response.status).toBe(201);
      expect(response.body.food_id).toBeDefined();
      expect(response.body.name).toBe('Apple');
      expect(response.body.type).toBe('Fruit');
    });

    it('can get a list of food records', async () => {
      const response = await mockRequest.get('/foods');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('can get a food record by id', async () => {
      const response = await mockRequest.get('/foods/1');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.name).toBeDefined();
    });

    it('can update a food record', async () => {
      const updateData = { name: 'Banana', type: 'Fruit' };
      const response = await mockRequest.put('/foods/1').send(updateData);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Banana');
    });

    it('can delete a food record', async () => {
      const response = await mockRequest.delete('/foods/1');
      expect(response.status).toBe(204);
    });

    describe('GET /foods/:id', () => {
      it('should return 404 for a non-existing food', async () => {
        const response = await mockRequest.get('/foods/9999'); // Assuming 9999 is a non-existing ID
        expect(response.status).toBe(404);
      });
    });
  });

  // Tests for animals
  describe('Animals API', () => {
    it('can add an animal record', async () => {
      const animalData = { name: 'Lion', habitat: 'Savannah' };
      const response = await mockRequest.post('/animals').send(animalData);
      expect(response.status).toBe(201);
      expect(response.body.animal_id).toBeDefined();
      expect(response.body.name).toBe('Lion');
      expect(response.body.habitat).toBe('Savannah');
    });

    it('can get a list of animal records', async () => {
      const response = await mockRequest.get('/animals');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('can get an animal record by id', async () => {
      const response = await mockRequest.get('/animals/1');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.name).toBeDefined();
    });

    it('can update an animal record', async () => {
      const updateData = { name: 'Tiger', habitat: 'Jungle' };
      const response = await mockRequest.put('/animals/1').send(updateData);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Tiger');
    });

    it('can delete an animal record', async () => {
      const response = await mockRequest.delete('/animals/1');
      expect(response.status).toBe(204);
    });

    describe('GET /animals/:id', () => {
      it('should return 404 for a non-existing animal', async () => {
        const response = await mockRequest.get('/animals/9999'); // Assuming 9999 is a non-existing ID
        expect(response.status).toBe(404);
      });
    });

  });

});
