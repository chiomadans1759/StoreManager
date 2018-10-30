import db from '../db/index';


/* Adds a new user */
export default class UserController {

  addUser(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'insert into store (id, name, email) values ($1, $2, $3) returning id, name, email',
        values: [req.body.id, req.body.name, req.body.email],
      };

      return client.query(query, (err0, result) => {
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows });
      });
    });
  }

  getOneUser(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from store where id = $1 LIMIT 1',
        values: [req.params.id],
      };
      return client.query(query, (err0, result) => {
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows[0] });
      });
    });
  }

  getAllUsers(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from store',
      };
      return client.query(query, (err0, result) => {
        
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows });
      });
    });
  }
  // const loginUser = (req, res) => {

// };

}
