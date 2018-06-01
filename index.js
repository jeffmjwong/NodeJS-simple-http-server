const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  if (req.url === '/hello') {
    res.write('<h2>Hello from our server!</h2>');
  } else if (req.url === '/foo') {
    if (req.method === 'GET') {
      res.write('<h2>FOO WAS HERE!!! BOOYAH!</h2>');
    } else if (req.method === 'POST') {
      res.write('<h2>YOU POSTED FOO!</h2>');
    }
  }
  res.write('<h1>Goodbye!</h1>');

  res.end();
});

server.listen(4321);
console.log('Server listening at localhost:4321');
