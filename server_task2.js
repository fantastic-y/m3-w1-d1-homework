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
            return res.end ("Invalid Request!");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port 5000 is now running...`);
});