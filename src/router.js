// Criamos um arquivo só para armazenar as rotas, de forma que a aplicação fique organizada

const express = require('express');
const tasksController = require('./controllers/tasksController');
// Vamos importar agora a middleware:
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const { deleteTask } = require('./models/tasksModel');

const router = express.Router();




router.get('/tasks', tasksController.getAll);


// Nesse caso, o tasksController é um controller que está sendo executado após o endpoint "tasks" e após vai executar o getAll que está em tasksController, que por sua vez executará o que foi passado pra função getAll

router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask);

// Nós iríamos criar as rotas agora, porém, para organizar a aplicação, criaremos a pasta controller para facilitar

// Explicando o código acima: Nós vamos acessar a rota através do que o usuário "POST", vai haver uma validação através da Middleware, após a validação, se estiver ok, passaremos para a parte do controller e por fim criaremos a task.

router.delete('/tasks/:id', tasksController.deleteTask);

// No código acima, o id foi passado com dois pontos para significar que ele é variável, ou seja, eu posso recuperar o que foi passado no controller.
// Passamos a função de deletar task para funcionar

module.exports = router;