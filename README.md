# wanted-pre-onboarding-backend

### 사용언어 및 프레임워크
Javascript & Node.js
   
      
- - - 

### 구현과정

express 모듈 설치 및 세팅
```
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

mysql 모듈 설치 및 database connection 설정
```
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
```
요구사항 구현
1. 채용공고를 등록합니다

```
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

```
   

2. 채용공고를 수정합니다.
```
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
```

3. 채용공고를 삭제합니다.
```
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
```

4. 채용공고 목록을 가져옵니다.
```
// 4. 조회
app.get('/', (req, res) => {
  const sql = 'SELECT id, position, compensation, detail, tech FROM test_db.recruit'
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
  
})
```
![list](https://github.com/Jeonga-Yu/wanted-pre-onboarding-backend/assets/45998806/5985f316-99cd-428e-aa4e-86ed1b04b636)


5. 채용 상세페이지를 가져옵니다.
```
// 5. 상세페이지 조회
app.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM test_db.recruit WHERE id = ?'
  
  connection.query(sql, req.params.id, (err, rows, fields) => {
    if (err) throw err
    res.send(rows)
  })
  
})
```
