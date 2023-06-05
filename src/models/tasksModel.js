// Aqui consta todas as funções que vão interagir diretamente com o banco de dados


const connection = require('./connection');

// Função responsável por buscar as tasks no banco de dados:
const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

module.exports = {
    getAll
};