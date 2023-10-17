const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'jay',
  password : '0306'
})

connection.connect( (err) => {
  if (err) throw err;
  console.log('Database Connected...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})