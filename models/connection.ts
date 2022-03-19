import mysql from 'mysql2/promise';
import 'dotenv/config';

const { HOST, USERNAME, PASSWORD, DATA_BASE } = process.env;
const connection = mysql.createPool({
	host: HOST,
	user: USERNAME,
	password: PASSWORD,
  database: DATA_BASE
});

export default connection;
