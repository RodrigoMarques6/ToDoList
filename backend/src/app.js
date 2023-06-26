const express = require('express');
const router = require('./router');

const app = express();

// Função para a API trabalhar com dados em json
app.use(express.json());

// Dizendo para o app usar sempre o router
app.use(router);

// Tornando o app como global no projeto, para que todos possam utilizá-lo
module.exports = app;