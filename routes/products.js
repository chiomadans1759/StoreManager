// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import ProductsController from '../controllers/productsController';


//add a product 
Router.post('/products', (req,res)=>{  
    ProductsController.addProduct(req,res);
});

 
module.exports = Router;