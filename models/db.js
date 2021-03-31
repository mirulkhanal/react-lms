const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'miruldb',
  password: 'nSZXoB01hdbZ4uR6',
  database: 'cms',
})
db.connect((err) => {
  if (err) {
    console.log('[DB] Database Connection Error')
    return
  }
  console.log('[DB] Database connected')
})
module.exports = db
