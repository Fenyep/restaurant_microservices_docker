const express = require('express')
const User = require('../Models/User')

const UserRouter = express.Router()

// Getting all the users
UserRouter.get('/', (req, res) => {
    User.find().then((users) => {
        if(users.length != 0) {
            res.status(200).json(users);
        } else {
            res.status(404).send('Users not found');
        }
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });
})

// Getting a specific user
UserRouter.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        if(user) {
            res.json(user)
        } else {
            res.status(400).send('User not found');
        }
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

// Creating a user
UserRouter.post('/create', (req, res) => {
    const newUser = new User({...req.body});
    newUser.save().then(() => {
        res.status(201).send('New user created Successfully!');
    }).catch((err) => {
        res.status(500).send('Internal Server Error!');
    });
})

// Deleting a specific user
UserRouter.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then((user) => {
        if(user) {
            res.status(200).send('User deleted Successfully!');
        } else {
            res.status(404).send('User not found');
        }
    }).catch((err) => {
        res.status(500).send('Server Internal Error!');
    });
})

module.exports = UserRouter;
