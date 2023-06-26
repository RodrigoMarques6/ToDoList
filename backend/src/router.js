// Arquivo criado para comportar as rotas e organizar a aplicação
// Todas as rotas estarão aqui

const express = require('express');
const router = express.Router();
// Importanto o controller:
const tasksController = require('./controller/tasksController');
const tasksMiddleware = require('./middleware/tasksMiddleware');

// Rota para retornar um array com os itens do banco de dados:
router.get('/tasks', tasksController.getAll);
router.get('/tasks2', (req, res) => res.send('Estou na rota tasks2'));
router.post('/tasks', tasksMiddleware.validadeBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
// Passamos a validação da middleware na rota post antes da execução do createTask

// A pasta models armazena todas as funções que vão se conectar diretamente com o banco de dados