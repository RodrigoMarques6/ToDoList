// Função para buscar tarefas no banco:

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    console.log(tasks)
}

fetchTasks();