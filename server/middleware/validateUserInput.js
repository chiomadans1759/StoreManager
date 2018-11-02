import db from '../db/config';
export default (req, res, next) => {
  
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const emailFilter = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (req.body.email) req.body.email = req.body.email.trim();
  const values = req.body;
  const required = ['username', 'email', 'password', 'role'];
  const errors = {};
  let pass = true;
  const email = emailFilter.test(req.body.email);

  /**
   * Loop through all the required fields, and check for missing fields values
   * @param {string} value - value of each field
   * @param {string} required - array of required fields
   * @param {object} error - object holding all keys and their error messages
   * @var {boolean} pass - check if value meets the minimum requirement
   */
  for (let i = 0; i < required.length; i += 1) {
    if (!values[required[i]]) {
      errors[required[i]] = `${required[i]} is required`;
      pass = false;
    }
  }

    
  db.connect((err, client) => {
    const query = {
      text: 'select * from users where email = $1',
      values: [req.params.email],
    };
    client.query(query, (err, result) => {
      if (err) res.status(400).json({ message: 'User already exists added!'});
      if (result.rowCount < 1) {
        return res.status(200).json({ success: result.rows[0] });
      }
    });
  });
 
  if (values.username && !values.username.replace(/\s/g, '').length) {
    errors.username = 'Username field can not be blank';
    pass = false;
  }
 
  if (values.email && !emailFilter.test(String(values.email).toLowerCase())) {
    errors.email = 'Invalid email. Check and try again!';
    pass = false;
  }
  /**
   * Check if any validation failed, if yes display error(s) else continue
   */
  if (pass === false) {
    res.status(400).json({
      error: errors
    });
  } else {
    req.body.username = req.body.username.toString().trim();
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password;
    req.body.role = req.body.role;
    next();
  }
};
