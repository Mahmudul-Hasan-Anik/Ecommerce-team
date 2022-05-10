const express = require('express')
const Product = require('../models/productModel')

const productRoutes = express.Router()

productRoutes.get('/', (req,res)=>{
    Product.find({}, (err,docs)=>{
        res.send(docs)
    })
})

productRoutes.get('/:id', (req,res)=>{
    Product.find({id: req.params._id}, (err,docs)=>{
        res.send(docs)
    })
})

module.exports = productRoutes