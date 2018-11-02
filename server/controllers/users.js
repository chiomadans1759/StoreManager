import db from '../db/config';
import bcrypt from 'bcrypt';
import auth from '../middleware/oauth';


export default class UserController {

  /* Adds a new user */
  addUser(req, res) {
    db.connect((error, client) => {
      if (error) { throw error }
      const hash = bcrypt.hashSync(req.body.password, 10);
      const query = {
        text: 'insert into users (username, email, password, role) values ($1, $2, $3, $4) returning id, username, email, password, role',
        values: [req.body.username, req.body.email, hash, req.body.role]
      };

      return client.query(query, (error3, res3) => {
        if (error3) {
            res.status(400).json({ error: 'Something went wrong with the process, Please try later' });
        } else {
            const createdUser = res3.rows[0];
            const userToken = auth.authenticate(createdUser);
            return res.status(201).send({
                success: 'success',
                user: createdUser,
                token: userToken,
            });
        }
    });
    });
  };

  //Fetch all users record from the database
  getOneUser(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from users where id = $1 LIMIT 1',
        values: [req.params.id],
      };
      return client.query(query, (err, result) => {
        if (err) res.status(400).json({ error: err });
        res.status(200).json({ success: result.rows[0] });
      });
    });
  }

  //Fetch a single user record from the database
  getAllUsers(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from users',
      };
      return client.query(query, (err0, result) => {
        
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows });
      });
    });
  }
  // Delete a single user from database
  deleteUser(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'delete from users where id = $1',
        values: [req.params.id]
      };

      db.query(query)
      .then((result) => {
        return res.status(200).json({
          success: 'Success',
          message: 'User credentials successfully deleted permernently from the database'
        });
      })
      .catch(error => {
        throw new Error(error);
      })
    });
  }


  loginUser(req, res) {
    db.connect((err, client) => {
    const query = {
        text: 'select * from users where email = $1 LIMIT 1',
        values: [req.body.email],
    };
    client.query(query, (error1, response) => {
        if (error1) {
            res.status(400).json({ error: 'Bad Request: fill in all required fields and try later 1' });
        } else {
            const user = response.rows[0]; 
            if (response.rows.length < 1) { 
                return res.status(401).send({ error: 'Your account does not exist. Check your Email or Password 1' });
            } else {
                const check = bcrypt.compareSync(req.body.password, user.password);
                if (check) {
                    const token = auth.authenticate(user); 
                    req.username = user.username;
                    return res.status(200).send({ success: 'success 1', user, token });
                } else {
                    return res.status(401).send({ error: 'Invalid Email or Password 1' });
                }
            }
        }
    });
  });
} 
}
