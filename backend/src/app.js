const express = require('express');

const app = express();

app.get('/rota3', (req, res) => res.status(200).send('Olá mundo!!!!'));

// Tornando o app como global no projeto, para que todos possam utilizá-lo
module.exports = app;