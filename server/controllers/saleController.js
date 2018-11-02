import db from '../db/config';

class SaleController {

  /* Creates a new sales record */
  addSale(req, res) {
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
          text: 'INSERT INTO sales (name, item, price, quantity, category) VALUES ($1, $2, $3, $4, $5) returning name, item, price, quantity, category',
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
              message: 'New Sales record successfully added!',
              status: 'Success',
              data: result.rows
            });
          }
        })
      }); 
    });
  }

  //Should get all sales record from the database
  getAllSales(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from sales',
      };
      return client.query(query, (err0, result) => {

        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows });
      });
    });
  }

  //Should get a single sales record from the database
  getASale(req, res) {
    db.connect((err, client) => {
      const query = {
        text: 'select * from sales where id = $1 LIMIT 1',
        values: [req.params.id],
      };
      return client.query(query, (err0, result) => {
        if (err0) res.status(400).json({ error: err0 });
        res.status(200).json({ success: result.rows[0] });
      });
    });
  }
}

//export sales record
export default SaleController;