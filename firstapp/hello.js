var http = require('http');

http.createServer((req,resp) => {
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end("Hello World\n");
}).listen(8124);

console.log(' Server running at http:// 127.0.0.1: 8124/');