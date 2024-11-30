const http = require('http');
const countStudent = require('./3-read_file_async');

const originalConsoleLog = console.log;

let consoleOutput = '';

console.log = (message) => {
  consoleOutput += `${message}\n`;
};

const app = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    try {
      await countStudent(process.argv[2]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      const output = `This is the list of our students\n${consoleOutput}`;
      res.end(output);
    } finally {
      console.log = originalConsoleLog;
      consoleOutput = '';
    }
  }
});

app.listen(1245);

module.exports = app;
