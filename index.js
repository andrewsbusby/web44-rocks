require('dotenv').config(); // this allows to 'inject' fake enviroment varialbes

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('*', (req, res, next) => {
    res.json({
        message: "web44 is awesome indeed"
    })
})

server.listen(process.env.PORT || 5000, () => { // heroku machine uses process.env.PORT
    console.log(`server running ${process.env.PORT || 5000}`)
})