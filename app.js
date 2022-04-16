const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Food = require('./models/Food');
const Cart = require('./models/cart-items');

const url = 'mongodb+srv://username:password@mynewcluster.coxgo.mongodb.net/food-cluster?retryWrites=true&w=majority';
mongoose.connect(url)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'myViews');

app.get('/', (req, res) => {
    res.redirect('/food');
});

// we will use this to add new items available
app.get('/add', (req, res) => {
    const FoodObj = new Food({
        title: 'Gatsby',
        ingredients: 'chicken, chips, lettuce',
        cost: 120,
    });

    FoodObj.save()
        .then((result) => {
            res.redirect('/food');
        })
        .catch((err) => console.log(err));
});

app.get('/food', (req, res) => {
    Food.find()               // returns an array of objects
        .then((result) => {
            res.render('index', { food: result, head:'All Blogs' });
        })
        .catch((err) => console.log(err));    
});

app.post('/cart/add', (req, res) => {
    const cartItems = new Cart(req.body);

    cartItems.save()
        .then((result) => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
});

app.get('/cart', (req, res) => {
    Cart.find()
        .then((result) => {
            res.render('cart', { cartDetails: result, head: 'Shopping Cart' });
        })
        .catch((err) => console.log(err));
});

app.get('/food/:id', (req, res) => {
    const id = req.params.id;

    Food.findById(id)   
        .then((result) => {
            res.render('details', { cartFood: result, head: 'Details' });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/cart/:id', (req, res) => {
    const id = req.params.id;

    Cart.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/cart' });
        })
        .catch((err) => console.log(err));
});


app.use((req, res) => {
    res.status(404).render('404');
});
