// Criamos um arquivo só para armazenar as rotas, de forma que a aplicação fique organizada

const express = require('express');

const router = express.Router();

module.exports = router;


router.get('/tasks')
// Nós iríamos criar as rotas agora, porém, para organizar a aplicação, criaremos a pasta controller para facilitar