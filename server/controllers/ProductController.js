// import db from '../db/index';

// /* Adds a new user */
// export default class ProductController {
//     addProduct(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'insert into products (id, item, name, price, quantity, category) values ($1, $2, $3, $4, $5, $6) returning id, item, name, price, quantity, category',
//           values: [req.body.id, req.body.item, req.body.name, req.body.price, req.body.quantity, req.body.category],
//         };
  
//         return client.query(query, (err0, result) => {
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows });
//         });
//       });
//     }

//     getAllProducts(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'select * from products',
//         };
//         return client.query(query, (err0, result) => {
          
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows });
//         });
//       });
//     }
//     getAProduct(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'select * from products where id = $1 LIMIT 1',
//           values: [req.params.id],
//         };
//         return client.query(query, (err0, result) => {
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows[0] });
//         });
//       });
//     }
//     updateAProduct(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'select * from store where id = $1 LIMIT 1',
//           values: [req.params.id],
//         };
//         return client.query(query, (err0, result) => {
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows[0] });
//         });
//       });
//     }
//     DeleteAProduct(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'select * from store where id = $1 LIMIT 1',
//           values: [req.params.id],
//         };
//         return client.query(query, (err0, result) => {
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows[0] });
//         });
//       });
//     }
// }