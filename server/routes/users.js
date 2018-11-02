import UserController from '../controllers/users';
// import { authenticate, verifyAdmin, verifyAttendant } from '../middleware/verify';
import validateUserInput from '../middleware/validateUserInput'; 
import validateLogin from '../middleware/validateLogin';
import auth from '../middleware/Oauth';

/* Users Router */
export default (server) => {
  server.post('/api/v1/login', validateLogin, new UserController().loginUser);
  server.get('/api/v1/users', new UserController().getAllUsers);
  server.get('/api/v1/users/:id', new UserController().getOneUser);
  server.post('/api/v1/users', validateUserInput, new UserController().addUser); 
  server.delete('/api/v1/users/:id', auth.verifyUserToken, new UserController().deleteUser);
};
