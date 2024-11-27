const http = require('http');

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the list of our students');
  }
});

app.listen(1245);

module.exports = app;
