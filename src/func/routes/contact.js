const express = require('express');

const sql = require('../db/db.js');

const router = express.Router();

const title = 'ContactJS';

router.get('/add-contact', (req,res) => {
    res.render('add_contact', {
        title: title,
    });
})

router.get('/list-contact', (req, res) => {
    sql.connector.query('SELECT * FROM list_contact', (err, result) => {
        res.render('list_contact', {
            title: title,
            data: result,
        });
    })
})

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    sql.connector.query(`SELECT * FROM list_contact WHERE id = ${id}`, (err,result) => {
        res.render('edit', {
            title: title,
            data: result,
        })
    })
})

module.exports = router;