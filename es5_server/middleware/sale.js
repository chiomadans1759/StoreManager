'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _check = require('express-validator/check');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (req, res, next) {

  var sales = [];
  var sale = {};
  var saleId = sales.length + 1;

  sale.id = saleId;
  sale.name = req.body.name;
  sale.price = req.body.price;
  sale.item = req.body.item;
  sale.quantity = req.body.quantity;
  sale.category = req.body.category;

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

  for (var i = 0; i < sales.length; i++) {
    if (sale.name === sales[i].name) {
      return res.status(409).json({
        message: 'A sales record with name  ' + sale.name + ' already exist'
      });
    }
  }

  sales.push(sale);
  return res.status(200).json(_defineProperty({
    message: 'New Sales Record successfully created!',
    status: 'Success',
    sale: sales[saleId - 1]
  }, 'sale', sale));
};