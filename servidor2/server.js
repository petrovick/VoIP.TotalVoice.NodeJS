const http = require('http')
http.createServer((req, res) => {
  res.write('servidor 2')
  res.end()
}).listen(3002);