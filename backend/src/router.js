// Arquivo criado para comportar as rotas e organizar a aplicação
// Todas as rotas estarão aqui

const express = require('express');
// Importanto o controller:
const tasksController = require('./controller/tasksController')

const router = express.Router();

// Rota para retornar um array com os itens do banco de dados:
router.get('/tasks', tasksController.getAll);

module.exports = router;

// A pasta models armazena todas as funções que vão se conectar diretamente com o banco de dados