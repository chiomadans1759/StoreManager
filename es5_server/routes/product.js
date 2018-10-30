'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _productController = require('../controllers/productController');

var _productController2 = _interopRequireDefault(_productController);

var _product = require('../middleware/product');

var _product2 = _interopRequireDefault(_product);

var _check = require('express-validator/check');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {

    //add a product 
    server.post('/product', [(0, _check.check)('name').isAlpha(), (0, _check.check)('price').isNumeric(), (0, _check.check)('item').isAlpha()], _product2.default, new _productController2.default().addProduct);

    //Fetch all products 
    server.get('/product', new _productController2.default().getAllProducts);

    //Fetch a Single product
    server.get('/product/:id', new _productController2.default().getAProduct);

    //Update a Single product
    server.put('/product/:id', new _productController2.default().updateAProduct);

    //Delete a Single product
    server.delete('/product/:id', new _productController2.default().DeleteAProduct);
};