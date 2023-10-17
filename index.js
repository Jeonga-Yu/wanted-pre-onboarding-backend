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

// 1. 채용공고 등록
app.put('/', (req, res) => {
  const body = req.body
  const sql =
  'INSERT INTO test_db.recruit (id,position,compensation,detail,tech) VALUES(?,?,?,?,?)'

  connection.query(sql, [body.id, body.position, body.compensation, body.detail, body.tech], (err, rows, field) => {
    if (err) throw err
    res.send(rows)
  })
})


// 2. 수정
app.post('/', (req, res) => {
  const body = req.body
  const sql =
  'UPDATE test_db.recruit SET position=?,compensation=?,detail=?,tech=? WHERE id = ?'

  connection.query(sql, [body.position, body.compensation, body.detail, body.tech, body.id], (err, rows, field) => {
    if (err) throw err
    res.redirect('/')
  })
})


// 3. 삭제
app.delete('/', (req, res) => {
  const body = req.body
  const sql =
  'DELETE FROM test_db.recruit WHERE id = ?'

  connection.query(sql, [body.id], (err, rows, field) => {
    if (err) throw err
    res.redirect('/')
  })
})


// 4. 조회
app.get('/', (req, res) => {
  const sql = 'SELECT id, position, compensation, detail, tech FROM test_db.recruit'
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
  
})


// 5. 상세페이지 조회
app.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM test_db.recruit WHERE id = ?'
  
  connection.query(sql, req.params.id, (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
  
})