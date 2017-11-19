var http = require('http');

const port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js!');
}).listen(port);

console.log(`Server started on localhost:${port}; press Ctrl-C to terminate...`);