// Arquivo criado para comportar as rotas e organizar a aplicação
// Todas as rotas estarão aqui

const express = require('express');

const router = express.Router();

// Rota para retornar um array com os itens do banco de dados:
router.get('/tasks', (req, res) => res.status(200).send('Olá mundo!!!!'));

module.exports = router;

// A pasta models armazena todas as funções que vão se conectar diretamente com o banco de dados