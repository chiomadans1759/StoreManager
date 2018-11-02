import db from '../db/config';
export default (req, res, next) => { 
  
  const values = req.body;
  const required = ['name', 'item', 'price', 'quantity', 'category'];
  const errors = {};
  let pass = true;


    const name = req.body.name;
    const item = req.body.item;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const category = req.body.category;
  /**
   * Loop through all the required fields, and check for missing fields values
   * @param {string} value - value of each field
   * @param {string} required - array of required fields
   * @param {object} error - object holding all keys and their error messages
   * @var {boolean} pass - check if value meets the minimum requirement
   */
  //Ensures that all product details are required
  for (let i = 0; i < required.length; i += 1) {
    if (!values[required[i]]) {
      errors[required[i]] = `${required[i]} is required`;
      pass = false;
    }
  }

  db.connect((err, client) => {
    const query = {
      text: 'select * from products where name = $1',
      values: [req.params.name],
    };
    client.query(query, (err, result) => {
      if (err) res.status(400).json({ message: 'product already exists added!'});
      if (result.rowCount > 0) {
        return res.status(200).json({ success: result.rows[0] });
      }
    });
  });
 
  if (pass === false) {
    res.status(400).json({
      Message : 'All products properties must be inputed'
    });
  } else {    if (typeof name !== "string") {
            res.status(400).json({ Message : 'Name of product must be a string'});
                                       }
             else if (typeof item !== "string") {
              res.status(400).json({ Message : 'Item name must be a string'});
                                       } 
            else if (typeof parseInt(price) !== "number" && price < 0) {
              res.status(400).json({ Message : 'Price must be a Number'});
                                      }
            else if (typeof parseInt(quantity) !== "number" && quantity < 0) {
              res.status(400).json({ Message : 'Quantity must be a Number'});
                                      }
            else if (typeof category !== "string") {
              res.status(400).json({ Message : 'Category of product must be a string'});
                                      }
  }
  next();
};
