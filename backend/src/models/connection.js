// Arquivo específico para a conexão com o banco de dados
const mysql = require('mysql2/promise');
// Porque utilizamos promise? Para usar as versões mais modernas do mysql2
require('dotenv').config();

console.log(process.env.MYSQL_HOST)

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });

module.exports = connection;

// Vamos utilizar variáveis de ambiente para não permitir que todos vejam a nossa conexão com o banco de dados. 
// Para isso, vamos criar um arquivo chamado .env na raiz do projeto