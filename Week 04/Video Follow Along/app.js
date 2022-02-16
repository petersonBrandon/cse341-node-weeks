const path = require('path');
const cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');
const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const corsOptions = {
  origin: "https://cse341-nodeshop.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('61f0241a5a9c3348e4eeeee3')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Brandon',
          email: 'Brandon@email.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
