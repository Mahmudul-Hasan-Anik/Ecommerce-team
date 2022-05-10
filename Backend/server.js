const express = require('express')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()

const Product = require('./models/productModel');
const productRoutes = require('./routes/productRouter');
const seedRoutes = require('./routes/seedRouter');
const userRoutes = require('./routes/userRouter');


app.use('/product', productRoutes)
app.use('/api/seed', seedRoutes)
app.use('/user', userRoutes)

app.get('/', function (req, res) {
  res.send('This is Your Server')
})

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('database connected')
});


app.listen(8000)