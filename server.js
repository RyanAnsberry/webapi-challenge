const express = require('express');

const helmet = require('helmet');

const ProjectRouter = require('./routes/project-router.js');

const ActionRouter = require('./routes/action-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/projects', ProjectRouter);
server.use('/api/actions', ActionRouter);


server.get('/', (req, res) => {
    res.send(`\n webapi-challenge API \n`)
})

module.exports = server;