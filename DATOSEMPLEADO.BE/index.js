const express = require('express'); // express server
const cors = require('cors'); // cross-origin 
require('dotenv').config(); // .env file

const app = express(); // create express server
app.use(cors()); // enable cross-origin

//routes
app.use('/colaboradores', require('./routes/colaboradores'));

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}` );
})