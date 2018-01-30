'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome Obrigatório.'],
        trim: true
    },
    cpf: {
        type: String,
        required: [true, 'CPF Obrigatório.'],
        index: true,
        unique: true,
        trim: true
    },
    rg: {
        type: String,
        unique: true,
        trim: true 
    },
    cep: {
        type: String,
        required: [true, 'CEP Obrigatório.'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Endereço Obrigatório.'],
        trim: true 
    },
    number: {
        type: String,
        required: [true, 'Número Obrigatório.'],
        trim: true 
    },
    telephone: [{
        type: String,
        required: [true, 'Telefone Obrigatório.'],
    }]

});

module.exports = mongoose.model('User', schema);
