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
};

const deleteTask = async (id) => {
    // Porque passamos um id na função? porque preciso saber qual é a tarefa que será deletada, e isso é resolvido com o id.
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    // Nesse caso eu também vou receber um ID, pois preciso saber qual é a task que preciso atualizar. Além disso, preciso receber os dados da task para conseguir atualizar (passamos id, task).

    const { title, status} = task;
    // No código acima eu estou retirando o title e o status das tasks para conseguir atualizar

    const [updatedTask] = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    // Estou setando um novo título e um novo status para a task no banco
}

module.exports = {
    getAll, 
    createTask,
    deleteTask,
    updateTask,
};