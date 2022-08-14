const express = require('express');
const server = express();
const route = require('./routes/index1');


server.use('/', route);

server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
});