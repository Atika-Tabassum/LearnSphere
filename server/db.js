const Pool =require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password:"tAbAssum53",
    host: 'localhost',
    port:5432,
    database:"learn"
  });
  module.exports=pool;