const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const cars = await Car.findAll()
    return res.json(cars)
});

const create = catchError(async (req,res) => {
    const car = req.body

const createCar = await Car.create(car)

    return res.status(201).json(createCar)

})

const remove = catchError(async (req,res) => {

    const {id} = req.params
    await Car.destroy({where: {id}})
    return res.sendStatus(204)
})

const getOne = catchError(async (req,res) => {
    const {id} = req.params
    const car = await Car.findByPk(id)
    return res.json(car)
})

const update = catchError(async (req, res) => {

    const car = req.body

   const {id} = req.params

    const carUpdate = await Car.update(car, {where: {id}, returning:true})
    return res.json(carUpdate[1][0])
})
module.exports = {
    getAll,
    create,
    remove,
    getOne,
    update
}