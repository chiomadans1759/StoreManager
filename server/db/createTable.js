import db from './config';

db.query(`CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    role text NOT NULL,
    username varchar NOT NULL,
    email text NOT NULL,
    password varchar NOT NULL
)`, (err) => {
    if (err) {
        console.log(err);
    }
});

db.query(`CREATE TABLE IF NOT EXISTS products (
    id serial PRIMARY KEY,
    name text NOT NULL,
    item text NOT NULL,
    price numeric NOT NULL,
    quantity numeric NOT NULL,
    category text NOT NULL
)`, (err) => {
    if (err){
        console.log(err);
    }
});

db.query(`CREATE TABLE IF NOT EXISTS sales(
    id serial PRIMARY KEY,
    name text NOT NULL,
    item text NOT NULL,
    price numeric NOT NULL,
    quantity numeric NOT NULL,
    category text NOT NULL
)`, (err) => {
    if (err) {
        console.log(err);
    }
});

