const http = require('http');
const routes = require('./routes06');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000)
