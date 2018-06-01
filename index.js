const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  res.write('Hello from our server!');
  res.write('<h1>Goodbye!</h1>');

  res.end();
});

server.listen(4321);
