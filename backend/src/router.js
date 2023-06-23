// Arquivo criado para comportar as rotas e organizar a aplicação
// Todas as rotas estarão aqui

const express = require('express');
const router = express.Router();
// Importanto o controller:
const tasksController = require('./controller/tasksController')



// Rota para retornar um array com os itens do banco de dados:
router.get('/tasks', tasksController.getAll);
router.get('/tasks2', (req, res) => res.send('Olá mundo2'))
module.exports = router;

// A pasta models armazena todas as funções que vão se conectar diretamente com o banco de dados