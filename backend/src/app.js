const express = require('express');
// Vamos importar o cors para dar acesso ao client:
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json())
// O código acima: Habilitar a utilização do json através do express
app.use(router);
// Acima explica que o nosso app vai sempre utilizar o nosso router

// Vamos colocar para o cors ser utilizado pela aplicação:
app.use(cors());

module.exports = app;