// Import elements needed
const express = require('express');
const bodyParser = require('body-parser');

// Create express object
const app = express();

// Set the template engine to be EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Connect name-page file
const namePage = require('./routes/name-page');

// Parse any input information
app.use(bodyParser.urlencoded({extended: false}));

app.use(namePage.routes);

app.listen(3000);