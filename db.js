import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});



/**
 * Create Tables*/

const createTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        users(
          id UUID PRIMARY KEY,
          username VARCHAR(128) NOT NULL,
          password VARCHAR(128) NOT NULL,
          created_date TIMESTAMP,
          modified_date TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  createTables();

  export pool;