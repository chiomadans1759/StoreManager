'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var databaseConfig = {};

databaseConfig.development = {
  connectionString: 'postgresql://postgres:admin@localhost:5433/store-manager'
};

exports.default = databaseConfig;