const express = require('express');
const router = require('./router');

const app = express();

// Dizendo para o app usar sempre o router
app.use(router);

// Tornando o app como global no projeto, para que todos possam utilizá-lo
module.exports = app;