const express = require('express');
const app = express();

const dotenv = require('dotenv');

// Setting up config.env files
dotenv.config({path : './config/config.env'});

// Importing routes
const jobs = require('./routes/jobs');

app.use('/api/v1',jobs);

// app.use(jobs);

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Started listening in port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});