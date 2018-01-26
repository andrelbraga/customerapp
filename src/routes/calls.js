'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, nex) => {
    res.status(200).send({
        title: "Calls"
    });
});


module.exports = router;