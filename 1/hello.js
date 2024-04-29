const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
    res. writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello, world!\n');
});

server.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});
