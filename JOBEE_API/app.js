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


//importing routes
const jobs = require('./routes/jobs');

app.use('/api/v1/', jobs);



const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server starte on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});