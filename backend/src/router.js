// Arquivo criado para comportar as rotas e organizar a aplicação
// Todas as rotas estarão aqui

const express = require('express');

const router = express.Router();

router.get('/rota3', (req, res) => res.status(200).send('Olá mundo!!!!'));

module.exports = router;