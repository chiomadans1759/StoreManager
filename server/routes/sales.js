// const express = require('express');
import express from 'express'
const Router = express.Router(); 

import { check } from 'express-validator/check'
// const ProductsController = require('../controllers/productsController');
import SalesController from '../controllers/salesController';


//add a Sales Record
Router.post('/sales', 
            [   check('name').isAlphanumeric(), 
                check('price').isNumeric(),
                check('item').isAlphanumeric()
            ],  
            SalesController.addSale);

//Fetch all Sales 
Router.get('/sales', SalesController.fetchAllSales);

//Fetch a Single product
Router.get('/sales/:id', SalesController.findASale) 
 

export default Router;

 