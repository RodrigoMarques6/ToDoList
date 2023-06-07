const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json())
// O código acima: Habilitar a utilização do json através do express
app.use(router);
// Acima explica que o nosso app vai sempre utilizar o nosso router

module.exports = app;