var http = require('http');

const port = 3000;

http.createServer(function (req, res) {
    // ignore query string
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
        case '': {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Homepage');
            break;
        }
        case '/about': {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Abot');
            break;
        }
        default: {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
            break;
        }
    }
    
}).listen(port);

console.log(`Server started on localhost:${port}; press Ctrl-C to terminate...`);