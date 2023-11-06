const http = require('http');
const routes = require('./routes07')

console.log(routes.text)
const server = http.createServer(routes.handler);
server.listen(3000)
