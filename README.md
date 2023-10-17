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
