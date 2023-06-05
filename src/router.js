// Criamos um arquivo só para armazenar as rotas, de forma que a aplicação fique organizada

const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

module.exports = router;


router.get('/tasks', tasksController.getAll)
// Nós iríamos criar as rotas agora, porém, para organizar a aplicação, criaremos a pasta controller para facilitar

// Nesse caso, o tasksController é um controller que está sendo executado após o endpoint "tasks" e após vai executar o getAll que está em tasksController, que por sua vez executará o que foi passado pra função getAll