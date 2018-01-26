'use strict'

exports.getId = (req, res, next) => {
    res.status(200).send({
        name: "User",
        id: req.params.id
    });
}

exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Get Users"
    });
}

exports.post = (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
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
