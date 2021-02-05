const http = require('http');

const data = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Mike"
    },
    {
        id: 3,
        name: "Peter"
    },
    {
        id: 4,
        name: "Carl"
    }
]

const server = http.createServer((req, res) => {
    res.end(
        JSON.stringify({ 
            success : true,
            data : data
        })
    )
});

server.listen(3000, ()=> {
    console.log('Server is started');  
})

