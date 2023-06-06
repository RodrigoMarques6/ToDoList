// Aqui consta todas as funções que vão interagir diretamente com o banco de dados


const connection = require('./connection');

// Função responsável por buscar as tasks no banco de dados:
const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

// Função para cadastrar uma nova tarefa no banco:
const createTask = async (task) => {
    // Abaixo nós vamos receber somente o título da task, então estamos passando o "title".
    const { title } = task;

    // Abaixo vamos escrever algo para inserir no banco:
    const createTask = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [1, 2, 3])
    // As interrogações são a quantidade de informações, ou seja, cada uma recebe uma informação. Os valores do array são para cada interrogação.
}

module.exports = {
    getAll
};