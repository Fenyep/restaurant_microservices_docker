const express = require('express')
const Food = require('../Models/Food')

const FoodRouter = express.Router();

// Getting all the foods
FoodRouter.get('/', (req, res) => {
    Food.find().then((foods) => {
        if(foods.length != 0) {
            res.status(200).json(foods);
        } else {
            res.status(404).send('Food not found');
        }
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });
})

// Getting a specific food
FoodRouter.get('/:id', (req, res) => {
    Food.findById(req.params.id).then((food) => {
        if(food) {
            res.status(200).json(food);
        } else {
            res.status(404).send('Food not found');
        }
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });
})

// Creating a food
FoodRouter.post('/create', (req, res) => {
    // new Food instance
    const newFood = new Food({...req.body});
    // saving the food in the database
    newFood.save().then(() => {
        res.status(201).send('New Food added successfully!');
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });  
})

// Deleting a specific food
FoodRouter.delete('/delete/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id).then((food) => {
        if(food) {
            res.status(200).json('Food deleted Successfully!');
        } else {
            res.status(404).send('Food not found');
        }
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });
})

module.exports = FoodRouter;