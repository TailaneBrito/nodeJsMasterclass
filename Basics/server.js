const http = require('http');


//always will require and response something
const server = http.createServer((req,res) => {
    res.end('fist web server');
});

server.listen(3000, ()=> {
    console.log('server is started');
});