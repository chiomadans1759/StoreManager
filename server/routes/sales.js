// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import SalesController from '../controllers/salesController';


//add a Sales Record
Router.post('/sales', SalesController.addSale);

//Fetch all Sales 
Router.get('/sales', SalesController.fetchAllSales);

//Fetch a Single product
Router.get('/sales/:id', SalesController.findASale) 
 

export default Router;

 