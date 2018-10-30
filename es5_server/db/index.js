'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _pg = require('pg');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var env = 'development';

var database = void 0;

if (env === 'development') {
  database = new _pg.Pool(_config2.default.development);
} else {
  database = new _pg.Pool(_config2.default.development);
}

exports.default = database;