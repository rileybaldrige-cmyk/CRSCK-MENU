const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CRSCK-MENU is online!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
