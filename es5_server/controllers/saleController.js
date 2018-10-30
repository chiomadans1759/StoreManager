// import db from '../db/index';

// /* Creates a new sales record and adds it to the database */
// export default class SaleController {
//     addSale(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'insert into sales (id, item, name, price, quantity, category) values ($1, $2, $3, $4, $5, $6) returning id, item, name, price, quantity, category',
//           values: [req.body.id, req.body.item, req.body.name, req.body.price, req.body.quantity, req.body.category],
//         };

//         return client.query(query, (err0, result) => {
//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows });
//         });
//       });
//     }

//     /* Fetches all sales records from the database */
//     getAllSales(req, res) {
//       db.connect((err, client) => {
//         const query = {
//           text: 'select * from sales',
//         };
//         return client.query(query, (err0, result) => {

//           if (err0) res.status(400).json({ error: err0 });
//           res.status(200).json({ success: result.rows });
//         });
//       });
//     }

//      /* Fetches a single sales records from the database */
//     getASale(req, res) {
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
// }
"use strict";