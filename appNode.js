// cria uma constatnte que recebe a biblioteca http
const http = require('http');
// cria uma constante que recebe o endereço
// local da minha máquina e a porta
const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bem vindo Fernando');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});