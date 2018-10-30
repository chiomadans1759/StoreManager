'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../db/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Creates a new sales record and adds it to the database */
var SaleController = function () {
  function SaleController() {
    _classCallCheck(this, SaleController);
  }

  _createClass(SaleController, [{
    key: 'addSale',
    value: function addSale(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'insert into sales (id, item, name, price, quantity, category) values ($1, $2, $3, $4, $5, $6) returning id, item, name, price, quantity, category',
          values: [req.body.id, req.body.item, req.body.name, req.body.price, req.body.quantity, req.body.category]
        };

        return client.query(query, function (err0, result) {
          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows });
        });
      });
    }

    /* Fetches all sales records from the database */

  }, {
    key: 'getAllSales',
    value: function getAllSales(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'select * from sales'
        };
        return client.query(query, function (err0, result) {

          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows });
        });
      });
    }

    /* Fetches a single sales records from the database */

  }, {
    key: 'getASale',
    value: function getASale(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'select * from products where id = $1 LIMIT 1',
          values: [req.params.id]
        };
        return client.query(query, function (err0, result) {
          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows[0] });
        });
      });
    }
  }]);

  return SaleController;
}();

exports.default = SaleController;