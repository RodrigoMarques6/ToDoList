// Todos os arquivos que lidam com o banco de dados ficam dentro da model
// Configurando aqui toda a conexão com banco de dados

const mysql = require('mysql2/promise');
require('dotenv').config();
    
const connection = mysql.createPool( {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASSWORD, 
    database: process.env.MYSQL_DATABASE,
});

// Não é viável deixar essas informações do banco de dados visíveis, por isso vamos usar variáveis de ambiente atraǘes da pasta .env

module.exports = connection;