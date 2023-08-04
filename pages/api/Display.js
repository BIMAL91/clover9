// pages/api/Display.js

import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { service, location } = req.body;

  const query = `SELECT * FROM image1 WHERE service = ? AND location = ?`;
  const params = [service, location];

  connection.query(query, params, (error, results) => {
    if (error) {
      console.error('Search query failed', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json({ results });
    }
  });
}
