# Express REST API Project
### Author: Evan Cheng
### Version: 1.0.0
## Overview

This project implements a REST API using Express.js that performs CRUD operations on a PostgreSQL database through Sequelize ORM. The API manages resources such as food items, each represented with a specific data model.

## Design Philosophy

Our API is designed with simplicity and modularity in mind, adhering closely to RESTful standards. The architecture is structured to ensure scalability, maintainability, and a clear separation of concerns between routing, database operations, and error handling.

## Server Initialization

The server is initialized in `src/server.js`, which sets up middleware, routes, and starts the Express application.

## Middleware Modules

Middleware modules are utilized to handle JSON payloads, logging, and Sequelize session transactions. They are initialized in `src/server.js` and configured to ensure smooth operation between requests and database interactions.

## Error Handling Modules

Error handling is critical for gracefully managing and logging issues that arise during API operations. Our implementation includes:

- `404.js`: Handles not found errors when a route is undefined.
- `500.js`: Manages internal server errors and unexpected conditions.

These are located under `src/error-handlers`.

## UML Diagram

Below is the UML diagram illustrating the architecture and interaction between components of the API:

![UML](./UML.png)
## SQL Models

Models are defined using Sequelize in the `src/models` directory. We have two main models:

- `food.js`: Represents food items with fields like `id`, `name`, `type`, and `calories`.
- `clothes.js`: Represents clothing items with fields such as `id`, `type`, `size`, and `color`.

Each model is properly configured to connect to the PostgreSQL database using the settings in `config/config.json`.

## Routes

The routes for each model are defined in:

- `src/routes/food.js`
- `src/routes/clothes.js`

Each route file handles the RESTful endpoints for its respective model, facilitating CRUD operations.

### Example Routes for Food:

- **POST /food**: Adds a new food record.
- **GET /food**: Retrieves all food records.
- **GET /food/:id**: Retrieves a single food record by ID.
- **PUT /food/:id**: Updates a food record by ID.
- **DELETE /food/:id**: Deletes a food record by ID.

## Testing

Testing is conducted using integration tests located in `__tests__/server.test.js`, asserting correct responses for each endpoint and proper error handling.

## Deployment

The server is deployed to the cloud. The live API can be accessed at:
[Render URL](postgres://evancheng:oW0au80BHy8ZUsos3GrBQahMJdP4fdfB@dpg-copasr4f7o1s73c8ukk0-a.oregon-postgres.render.com/api_server_db_ek8r)
(postgres://evancheng:oW0au80BHy8ZUsos3GrBQahMJdP4fdfB@dpg-copasr4f7o1s73c8ukk0-a.oregon-postgres.render.com/api_server_db_ek8r)

