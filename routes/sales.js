// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import SalesController from '../controllers/salesController';


//add a Sales Record
Router.post('/sales', (req,res)=>{  
    SalesController.addSale(req,res);
});

 

module.exports = Router;