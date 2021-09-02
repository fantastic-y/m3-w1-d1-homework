var http = require ('http');
var path = require ('path');
var fs = require ('fs');
var url = require('url');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer ((req,res) => {
    if (req.url === '/') {
        res.setHeader("content-Type", "text/html");
        res.writeHead(200);
        res.end('<html><body><h1>Home Page.</h1></body></html>');
    } else if (req.url === '/about') {
        res.setHeader("content-Type", "text/html");
        res.writeHead(200);
        res.end('<html><body><h1>About Page.</h1></body></html>');
    } else if (req.url === '/contact') {
        res.setHeader("content-Type", "text/html");
        res.writeHead(200);
        res.end('<html><body><h1>Contact Page.</h1></body></html>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('Invalid Request!');
    };
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port 5000 is now running...`);
});