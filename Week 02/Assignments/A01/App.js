const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('In the users page');
    res.send('<h1>The "Users" page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the default page');
    res.send('<h1>This is the default page!</h1>');
});

app.listen(3000);