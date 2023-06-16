// Arquivo para se conectar com o banco de dados;
// Supondo que aqui tivesse login, entao trataríamos a parte de usuários em outro arquivo dentro da models.

const connection = require('./connection')

const getAll = async () => {
    // Função para retornar as tasks do banco de dados:
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
    // Após aqui, vamos no router para criar efetivamente a nossa rota
};

// Exportando um objeto que dentro terá as funções que serão exportadas. Somente a título de organização.

module.exports = {
    getAll
}