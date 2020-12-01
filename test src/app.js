/* server.js */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((Request, Response) => {
    Response.statusCode = 200;
    Response.setHeader('Content-Type', 'text/plain');
    Response.end('Hello World\n');
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

server.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':' + port + '/');
  });