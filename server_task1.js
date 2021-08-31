var http = require ('http');
var path = require ('path');
var fs = require ('fs');
var url = require('url');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer ((req,res) => {
    
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead (404, {'Content-Type': 'text/html'});
            res.end ("Invalid Request!");
        } else if (q.pathname == '/contact.html') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>Contact Page.</h1></body></html>');
        } else if (q.pathname == '/about.html') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>About Page.</h1></body></html>');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>Home Page.</h1></body></html>');
            fs.createReadStream(filename).pipe(res);
        };
    });
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port 5000 is now running...`);
});