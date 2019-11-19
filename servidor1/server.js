const http = require('http')
http.createServer((req, res) => {
  res.write('servidor 1')
  res.end()
}).listen(3001);