require('dotenv').config(); // this allows to 'inject' fake enviroment varialbes

const { PORT } = require('./config')

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.send(`<h1>Web 44 is Aswesome</h1>`)
})

server.use('*', (req, res, next) => {
    res.json({
        message: "web44 is awesome indeed"
    })
})

server.listen(PORT, () => { // heroku machine uses process.env.PORT
    console.log(`server running ${PORT}`)
})