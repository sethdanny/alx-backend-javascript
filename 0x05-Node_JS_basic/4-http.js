const http = require('http');

const host = 'localhost';
const port = 1245;

const requestListener = (request, response) => {
  console.log(`Method: ${request.method}`);
  console.log(`Path: ${request.url}`);
  console.log(`Headers: ${request.headers}`);
  response.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
