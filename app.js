const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cart_routes = require('./routes/cart_routes');
const food_routes = require('./routes/food_routes');
const auth_routes = require('./routes/auth_routes');


const PORT = 3000;
const url = 'mongodb+srv://tom123:Graphic4@mynewcluster.coxgo.mongodb.net/food-cluster?retryWrites=true&w=majority';

mongoose.connect(url)
    .then((result) => app.listen(PORT, () => {
            console.log(`listening at port ${PORT}`)
        })
    )
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'myViews');

app.get('/', (req, res) => {
    res.redirect('/food');
});

app.use(auth_routes);
app.use(food_routes);
app.use(cart_routes);

app.use((req, res) => {
    res.status(404).render('404', { head: 'Error' });
});
