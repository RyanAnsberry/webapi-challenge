const express = require('express');

const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());


server.get('/', (req, res) => {
    res.send(`\n webapi-challenge API \n`)
})

module.exports = server;