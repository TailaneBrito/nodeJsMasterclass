const express = require('express');
const app = express();

const dotenv = require('dotenv')

//setting up the config.env file variables
dotenv.config({path : './config/config.env'});


const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server starte on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});