'use strict';

const { Sequelize, DataTypes } = require('sequelize');

class Collection {
  constructor(model) {
    this.model = model;
  }

  // Create a new record using the model's create method
  async create(data) {
    try {
      let record = await this.model.create(data);
      return record;
    } catch (e) {
      console.log('Error creating data for model', this.model.name, e);
      throw e; // Rethrow the error after logging
    }
  }

  // Read a record by id, or all records if no id is provided
  async read(id, options = {}) {
    try {
      let records;
      if (id) {
        options.where = { id };
        records = await this.model.findOne(options);
      } else {
        records = await this.model.findAll(options);
      }
      return records;
    } catch (e) {
      console.log('Error reading data for model', this.model.name, e);
      throw e; // Rethrow the error after logging
    }
  }

  // Update a record by id
  async update(id, data) {
    try {
      let record = await this.model.findOne({ where: { id } });
      if (!record) {
        throw new Error('Record not found');
      }
      let updatedRecord = await record.update(data);
      return updatedRecord;
    } catch (e) {
      console.log('Error updating data for model', this.model.name, e);
      throw e; // Rethrow the error after logging
    }
  }

  // Delete a record by id
  async delete(id) {
    try {
      if (!id) throw new Error('No ID provided for delete operation');
      let deletedRecord = await this.model.destroy({ where: { id } });
      return deletedRecord;
    } catch (e) {
      console.log('Error deleting data for model', this.model.name, e);
      throw e; // Rethrow the error after logging
    }
  }
}

module.exports = Collection;
