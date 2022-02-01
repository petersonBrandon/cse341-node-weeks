// Import elements needed
const express = require('express');
const router = express.Router();

const names = [];

// Route 2
router.get('/add-name', (req, res, next) => {
    res.render('input', {pageTitle: 'Add Name', path: '/add-name'})
});

// Route 2-Post
router.post('/add-name', (req, res, next) => {
    names.push(req.body.name);
    console.log(names[0]);
    res.redirect('/');
})

// Route 1
router.get('/', (req, res, next) => {
    res.render('names', {names: names, pageTitle: 'Name List', path: '/'});
});

exports.routes = router;