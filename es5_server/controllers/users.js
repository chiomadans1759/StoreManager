'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../db/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Adds a new user */
var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: 'addUser',
    value: function addUser(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'insert into store (id, name, email) values ($1, $2, $3) returning id, name, email',
          values: [req.body.id, req.body.name, req.body.email]
        };

        return client.query(query, function (err0, result) {
          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows });
        });
      });
    }
  }, {
    key: 'getOneUser',
    value: function getOneUser(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'select * from store where id = $1 LIMIT 1',
          values: [req.params.id]
        };
        return client.query(query, function (err0, result) {
          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows[0] });
        });
      });
    }
  }, {
    key: 'getAllUsers',
    value: function getAllUsers(req, res) {
      _index2.default.connect(function (err, client) {
        var query = {
          text: 'select * from store'
        };
        return client.query(query, function (err0, result) {

          if (err0) res.status(400).json({ error: err0 });
          res.status(200).json({ success: result.rows });
        });
      });
    }
    // const loginUser = (req, res) => {

    // };

  }]);

  return UserController;
}();

exports.default = UserController;