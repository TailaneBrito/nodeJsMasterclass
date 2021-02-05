const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query)

    res.status(200).json({
        message : 'all about requested object'
    });
});

app.post('/', (req, res)=> {
    console.log(req.body);
});

app.listen(3000, ()=> {
    console.log('Server started');
});