// const express = require('express');
import express from 'express'
const Router = express.Router();

import { check } from 'express-validator/check'

import ProductsController from '../controllers/productsController';


//add a product 
Router.post('/products', 
            [   check('name').isAlpha(), 
                check('price').isNumeric(),
                check('item').isAlpha()
            ],  
            ProductsController.addProduct);

//Fetch all products 
Router.get('/products', ProductsController.fetchAllProducts);

//Fetch a Single product
Router.get('/products/:id', ProductsController.findAProduct);

//Update a Single product
Router.put('/products/:id', ProductsController.UpdateAProduct);

//Delete a Single product
Router.delete('/products/:id', ProductsController.deleteAProduct);
 

export default Router;
 
 