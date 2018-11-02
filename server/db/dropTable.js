import db from './config';

const dropTables = () => {
    const queryText = 'DROP TABLE IF EXISTS users';
    db.query(queryText)
      .then((res) => {
        console.log(res);
        console.log('Table dropped successfully');
        db.end();
      })
      .catch((err) => {
        console.log(err);
        db.end();
      });
  }
  

dropTables();