// const http = require('http');
 
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
 
//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };
 
 
// const server = http.createServer(requestListener);
 
// const port = 5000;
// const host = 'localhost';
 
// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });

// Latihan
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Constent-Type', 'text/html');
    response.statusCode = 200;

    const { method } = request;

    if (method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }

    if (method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
    if (method === 'PUT') {
        response.end('<h1>onjor!</h1>');
    }
    if (method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});










