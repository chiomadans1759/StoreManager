'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

var _validateUserInput = require('../middleware/validateUserInput');

var _validateUserInput2 = _interopRequireDefault(_validateUserInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Users Router */
exports.default = function (server) {
  // router.post('/login', loginUser);
  server.get('/users', new _users2.default().getAllUsers);
  server.get('/users/:id', new _users2.default().getOneUser);
  server.post('/users', _validateUserInput2.default, new _users2.default().addUser);
};
// import { authenticate, verifyAdmin, verifyAttendant } from '../middleware/verify';