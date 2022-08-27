const express = require('express');

const router = express.Router();

const title = 'ContactJS';

router.get('/', (req,res) => {
    res.render('index', {
        title: title,
    });
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: title,
    })
})

module.exports = router;