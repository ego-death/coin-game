const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if(page == '/'){
        fs.readFile('index.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
        })
    }
    else if(page == '/css/style.css'){
        fs.readFile('css/style.css', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
        });
    }
    else if(page == '/js/index.js'){
        fs.readFile('js/index.js', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
        });
    }
    else if(page == '/img/heads.png'){
        fs.readFile('img/heads.png', (err, data) => {
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                res.end();
        });
    }
    else if(page == '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let coin = Math.round(Math.random())?'heads':'tails';
        res.end(JSON.stringify(({answer: coin})));
    }
});

server.listen(5000);