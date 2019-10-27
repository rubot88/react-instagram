const http = require('http');
const data = require('../posts.json');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/posts') {
        const { posts } = data;
        res.end(JSON.stringify(posts));
    }
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));