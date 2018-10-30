'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _check = require('express-validator/check');

exports.default = function (req, res, next) {

  var products = [];
  var product = {};
  var productId = products.length + 1;

  product.id = productId;
  product.item = req.body.item;
  product.name = req.body.name;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  product.category = req.body.category;

  /**
     * Loop through all the required fields, and check for missing fields values
     * @param {string} value - value of each field
     * @param {string} required - array of required fields
     * @param {object} error - object holding all keys and their error messages
     * @var {boolean} pass - check if value meets the minimum requirement
     */

  var errors = (0, _check.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: 'Failed',
      message: errors.array()[0].msg + ' ' + errors.array()[0].value + ' provided for ' + errors.array()[0].param
    });
  }

  for (var i = 0; i < products.length; i += 1) {
    if (product.name === products[i].name) {
      return res.status(409).json({
        message: 'A product with name  ' + product.name + ' already exist'
      });
    }
  }

  products.push(product);
  return res.status(200).json({
    message: 'New Product successfully added!',
    status: 'Success',
    product: products[productId - 1]
  });
};