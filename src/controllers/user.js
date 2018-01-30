'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getId = (req, res, next) => {
    res.status(200).send({
        name: "User",
        id: req.params.id
    });
}

exports.get = (req, res, next) => {
    
    try {
        User
            .find({})
                .then((success)=>{
                    res.status(200).send({ data: success });
                }).catch((error)=>{
                    res.status(200).send({ message: "Error", data: error });
                });
    } catch (error) {
        
    }
}

exports.post = (req, res, next) => {
    var user = new User(req.body);
    
    try {
        user
            .save()
                .then(x =>{
                     res.status(200).send({ message: "Saved" });
                }).catch(e =>{
                     res.status(400).send({ message: "Error", data: e });
                 });

    } catch (error) {
        res.status(400).send({ message: "Error", data: error });
    }
  
    
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
}
