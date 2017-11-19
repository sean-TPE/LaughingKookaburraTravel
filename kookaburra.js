var express = require('express');

var app = express();

const port = 3000;

app.set('port', process.env.PORT || port);

app.get('/', function (req,res) {
    res.type('text/plain');
    res.send('Welcome to Laughing Kookaburra Travel');
});

app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('About us...');
});

// custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error('err.stack');
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
})
