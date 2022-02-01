// Importing required functions
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'html01.html'))
});

router.get('/html02', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'html02.html'))
});

module.exports = router;