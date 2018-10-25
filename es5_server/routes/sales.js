'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _salesController = require('../controllers/salesController');

var _salesController2 = _interopRequireDefault(_salesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();
// const ProductsController = require('../controllers/productsController');
// const express = require('express');


//add a Sales Record
Router.post('/sales', _salesController2.default.addSale);

//Fetch all Sales 
Router.get('/sales', _salesController2.default.fetchAllSales);

//Fetch a Single product
Router.get('/sales/:id', _salesController2.default.findASale);

exports.default = Router;