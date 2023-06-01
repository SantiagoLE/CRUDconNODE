const express = require('express');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aqui
router.use('/cars', carRouter)
module.exports = router;