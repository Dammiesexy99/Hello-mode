const http = require ('http');

http.createServer((req, res) => {
    res.writeHead( 200, { 'content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8081);

console.log('server running on port 8081')
   




