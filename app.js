const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');



//middleweare to parse all the data going to database + always before routes 
app.use(cors());
app.use(bodyParser.json({ extended: false }));

//import routes

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const subcategoryRoutes = require('./routes/subcategories');

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);

dotenv.config();

//connect to database 

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to database'));

//creating routes 

app.get('/', (req, res) => {
    res.send('we are on !');
});



//start listening to the server 

app.listen(8080);