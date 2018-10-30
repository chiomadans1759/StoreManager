import UserController from '../controllers/users';
// import { authenticate, verifyAdmin, verifyAttendant } from '../middleware/verify';
import validateUserInput from '../middleware/validateUserInput'; 

/* Users Router */
export default (server) => {
  // router.post('/login', loginUser);
  server.get('/users', new UserController().getAllUsers);
  server.get('/users/:id', new UserController().getOneUser);
  server.post('/users', validateUserInput, new UserController().addUser); 
};
