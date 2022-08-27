const express = require('express');

const petitions = require('../db/petitions.js');

const db_Func = express.Router();

db_Func.get('/add/:names/:age/:email/:number', (req,res) => {
    let names = req.params.names
    let age = req.params.age
    let email = req.params.email
    let number = req.params.number
    petitions.addSQL(names, age, email, number)
    res.redirect('/list-contact')
})

db_Func.get('/delete/:id', (req,res) => {
    let id = req.params.id
    petitions.deleteSQL(id)
    res.redirect('/list-contact')
})

db_Func.get('/update/:id/:names/:age/:email/:number', (req,res) => {
    let id = req.params.id
    let names = req.params.names
    let age = req.params.age
    let email = req.params.email
    let number = req.params.number
    petitions.updateSQL(id, names, age, email, number)
    res.redirect('/list-contact')
})

module.exports = db_Func;