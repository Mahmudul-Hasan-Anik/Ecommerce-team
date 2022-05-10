const express = require('express')
const productData = require('../Data/itemData')
const userData = require('../Data/user')
const Product = require('../models/productModel')
const User = require('../models/userModel')

const seedRoutes = express.Router()

seedRoutes.get('/product', async(req,res)=>{
    await Product.deleteMany()
    const response = await Product.insertMany(productData)
    res.send(response)
})

seedRoutes.get('/user', async(req,res)=>{
    await User.deleteMany()
    const response = await User.insertMany(userData)
    res.send(response)
})

module.exports = seedRoutes