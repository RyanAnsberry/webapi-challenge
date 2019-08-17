const express = require('express');

const helmet = require('helmet');

const ProjectRouter = require('./routes/project-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/projects', ProjectRouter);


server.get('/', (req, res) => {
    res.send(`\n webapi-challenge API \n`)
})

module.exports = server;