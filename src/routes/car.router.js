const { getAll, create, remove, getOne, update } = require('../controllers/car.controller');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/")
		.get(getAll)
		.post(create)

carRouter.route("/:id")
		.delete(remove)
		.get(getOne)
		.put(update)


module.exports = carRouter;