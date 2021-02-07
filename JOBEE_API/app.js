const express = require('express');
const app = express();

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

//setting up the config.env file variables
dotenv.config({path : './config/config.env'});

//connecting to database
connectDatabase();

//setup body parser
app.use(express.json());


//create middleware, needs to use the next to move on, it will always going to run. Available everywhere
//into this project. function
// const middlware = (req, res, next) => {
//     console.log('Hello from the middleware');
    
//     //set the global user variable
//     req.user = "Tailane Brito";
//     req.requestMethod = req.method
//     req.url = req.url
//     next();
// }

// app.use(middlware);

//importing routes
const jobs = require('./routes/jobs');

app.use('/api/v1/', jobs);



const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server starte on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});