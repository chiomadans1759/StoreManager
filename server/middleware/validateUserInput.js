export default (req, res, next) => {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const emailFilter = /^([a-zA-Z0-9_\s.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  if (req.body.email) req.body.email = req.body.email.trim();
  const values = req.body;
  const required = ['id', 'name', 'email'];
  const errors = {};
  let pass = true;

 //get this dummy data values from the databas
  const email = 'jane.doe@mail.com';

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
  if (values.email === email) {
    errors.email = `Email ${email} aready exist`;
    res.status(409).json({
      error: errors
    });
    pass = false;
    return false;
  }
  if (values.name && !values.name.replace(/\s/g, '').length) {
    errors.name = 'Name field can not be blank';
    pass = false;
  }
  /**
     * Check to see that name is not blanck
     * @param {string} name - User's name {meeky}
     */
  if (values.name && !values.name.replace(/\s/g, '').length) {
    errors.name = 'name field can not be blank';
    pass = false;
  }
  /**
     * Check to see that email is not blanck
     * @param {string} email - User's email {meeky.ae@gmail.com}
     */
  if (values.email && !values.email.replace(/\s/g, '').length) {
    errors.email = 'Email field can not be blank';
    pass = false;
  }
  /**
     * Check to see that email format is correct
     * @param {string} email - User's email {meeky.ae@gmail.com}
     */
  if (values.email && !emailFilter.test(String(values.email).toLowerCase())) {
    errors.email = 'Invalid email';
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
    req.body.id = req.body.id.toString().trim()
    req.body.name = req.body.name.toString().trim();
    req.body.email = req.body.email.trim();
    next();
  }
};
