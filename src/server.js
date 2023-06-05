// Em resumo, "server" no Node.js refere-se à aplicação de servidor que você cria usando o Node.js para lidar com solicitações e fornecer respostas aos clientes.

const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;


app.listen('3333', () => console.log(`Server is running on PORT ${PORT}`) );