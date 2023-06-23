// Arquivo para se conectar com o banco de dados;
// Supondo que aqui tivesse login, entao trataríamos a parte de usuários em outro arquivo dentro da models.

const connection = require('./connection');

const getAll = async () => {
    // Função para retornar todas as tasks do banco de dados:
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
    // Após aqui, vamos no router para criar efetivamente a nossa rota
};

const createTasks = async (tasks) => {
    // No parâmetro, nós estamos recebendo "tasks"

    // Código abaixo: "De dentro da task recebida, quero retirar algo. Nesse caso é o title."
    const { title } = task;

    // const createdTask = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [1, 2, 3])
// Para a parte acima comentada:
    // cada interrogação representa um dos valores listados anteriormente (title, status e created_at);
    // Passamos um array para que cada valor seja pra um
    // Agora vamos representar de outra forma, somente pra melhorar a visualização passando uma query:

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    const createdTask = await connection.execute(query, [title, 'pendente', 'data aqui']);
    // Passamos o "pendente" porque cada task que for criada no todolist estará pendente no início.
}

// Exportando um objeto que dentro terá as funções que serão exportadas. Somente a título de organização.

module.exports = {
    getAll,
    createTasks
}