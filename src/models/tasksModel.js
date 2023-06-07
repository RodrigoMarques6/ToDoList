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

    const dateUTC = new Date(Date.now()).toUTCString();

    // O código acima: Temos um obj new Date, passamos como parâmetro o date.now que retorna a quantidade em milisegundos desde o ano de 1970 (e aí a gente consegue gerar a data atual através do Date.now), e após nós usamos a função toUTCString para gerar a data em formato UTC;
    // Após isso, vou passar essa constante no createTask

    // Abaixo vamos escrever algo para inserir no banco:

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    
    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
    // As interrogações são a quantidade de informações, ou seja, cada uma recebe uma informação. Os valores do array são para cada interrogação.
    // Basicamente o array vai salvar tittle, status e created_at

    // A data salva no banco é em formato UTC.

    // return createdTask[0];
    // Vamos modificar o retormo para retornar somente o insertID:

    return {insertId: createdTask.insertId};
}

module.exports = {
    getAll, 
    createTask,
};