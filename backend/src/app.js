const express = require('express');
// Após finalizar nosso backend, vamos começar o frontend, mas primeiro importando o cors com "npm install cors" e requerendo o cors no código conforme abaixo:
const cors = require('cors');
const router = require('./router');

const app = express();

// Vamos liberar o cors para todos utilizarem: 
app.use(cors());

// Função para a API trabalhar com dados em json
app.use(express.json());

// Dizendo para o app usar sempre o router
app.use(router);

// Tornando o app como global no projeto, para que todos possam utilizá-lo
module.exports = app;