import db from '../db/config';
/* Adds a new user */
class ProductController {
  addProduct(req, res) {
    db.connect((err, client) => {
      const sql = {
        text: 'select role from users where role = $1 LIMIT 1',
        values: [req.decoded.role]
      }
      client.query(sql, (error, result) => {
        console.log(result.rows[0]);
        if (result.rows[0].role !== 'admin') {
         return res.status(402).json({
            message: "Not authorized"
          });
        }
        //
        const query = {
          text: 'INSERT INTO products (name, item, price, quantity, category) VALUES ($1, $2, $3, $4, $5) returning name, item, price, quantity, category',
          values: [
            req.body.name,
            req.body.item,
            req.body.price,
            req.body.quantity,
            req.body.category,
          ]
        }
        client.query(query, (err, result) => {
          if (err) {
            return res.status(400).json({ error: err });
          }else {
            return res.status(201).json({
              message: 'New Product successfully added!',
              status: 'Success',
              data: result.rows
            });
          }
        })
      }); 
    });
  }

  getAllProducts(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from products',
      };
      client.query(query, (err0, result) => {

        if (err0) res.status(400).json({ error: err0 });
        return res.status(200).json({ success: result.rows });
      });
    });
  }
  getAProduct(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from products where id = $1 LIMIT 1',
        values: [req.params.id],
      };
      return client.query(query, (err0, result) => {
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows[0] });
      });
    });
  }
  updateAProduct(req, res) {
    const {
      name,
      item,
      price,
      quantity,
      category
    } = req.body;
    db.connect((err, client) => {
      const query = {
        text: 'UPDATE products SET name = $1, item = $2, price = $3, quantity = $4, category = $5 WHERE id = $6 returning id, item, quantity',
        values: [name, item, price, quantity, category, req.params.id],
      };
      return client.query(query, (err0, result) => {
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows});
      });
    });
  }
  DeleteAProduct(req, res) {
    db.connect((err, client) => {
      const sql = {
        text: 'select role from users where role = $1 LIMIT 1',
        values: [req.decoded.role]
      }
      client.query(sql, (error, result) => {
        console.log(result.rows[0]);
        if (result.rows[0].role !== 'admin') {
         return res.status(402).json({
            message: "Not authorized"
          });
        }

      const query = {
        text: 'delete from products where id = $1',
        values: [req.params.id]
      };

      db.query(query)
      .then((result) => {
        return res.status(200).json({
          success: 'Success',
          message: 'Product successfully removes from database'
        });
      })
      .catch(error => {
        throw new Error(error);
      })
    });
  }
    )}
}



export default ProductController;