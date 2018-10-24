const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("indmind loves contributing to ScoreLab")
})

server.listen(8080);
