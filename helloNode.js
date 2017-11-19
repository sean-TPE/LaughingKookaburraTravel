var http = require('http'),
      fs = require('fs');

const port = 3000;

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }
    
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Interanl Error');
        } else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    });
}

http.createServer(function (req, res) {
    // normalize url by removing querystring, optional
    // trailing slash, and making lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
        case '': {
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        }
        case '/about': {
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        }
        case '/img/logo.jpg': {
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
            break;
        }
        case '/img/kookaburra.jpg': {
            serveStaticFile(res, '/public/img/kookaburra.jpg', 'image/jpeg');
            break;
        }
        case '/img/busselton.jpg': {
            serveStaticFile(res, '/public/img/busselton.jpg', 'image/jpeg');
            break;
        }
        // case '/img/busselton-jetty.jpg': {
        //     serveStaticFile(res, '/public/img/busselton-jetty.jpg', 'image/jpeg');
        //     break;
        // }
        case '/img/notfound.jpg': {
            serveStaticFile(res, '/public/img/notFound.jpg', 'image/jpeg');
            break;
        }
        default: {
            serveStaticFile(res, '/public/notfound.html', 'text/html');
            break;
        }
    }
    
}).listen(port);

console.log(`Server started on localhost:${port}; press Ctrl-C to terminate...`);