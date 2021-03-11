var http = require('http');
console.log(`Helloworld server starting, port ${process.env.PORT || 8080}`)
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World! :)');
  res.end();
}).listen(process.env.PORT || 8080);