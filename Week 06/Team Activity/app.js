const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);

app.listen(PORT);