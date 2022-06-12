const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const Order = require('../Models/Order')

const OrderRouter = express.Router()

// Getting all the orders
OrderRouter.get('/', (req, res) => {
    Order.find().then((orders) => {
        if(orders.length != 0) {
            res.status(200).json(orders);
        } else {
            res.status(404).send('Orders not found');
        }
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

// Getting a specific order
OrderRouter.get('/:id', (req, res) => {
    Order.findById(req.params.id).then((order) => {
        if(order) {
            axios.get(`http://localhost:5000/users/${order.userID}`).then((response) => {
                let orderObject = {
                    CustomerName: response.data.name,
                    FoodTitle: ''
                }
                axios.get(`http://localhost:3000/foods/${order.foodID}`).then((response) => {
                    orderObject.FoodTitle = response.data.title,
                    res.status(200).json(orderObject);
                })
            })
        } else {
            res.status(404).send('User not found');
        }
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

// Creating an order
OrderRouter.post('/create', (req, res) => {
    const newOrder = new Order({
        customerID: mongoose.Types.ObjectId(req.body.userID),
        bookID: mongoose.Types.ObjectId(req.body.foodID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    })
    // saving the order in the database
    newOrder.save().then(() => {
        res.status(201).status('New order created Successfully!');
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

// deleting an order
OrderRouter.delete('/delete/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id).then((order) => {
        if(order) {
            res.status(200).send('User deleted Successfully');
        } else {
            res.status(404).send('User not found');
        }
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

module.exports = OrderRouter;