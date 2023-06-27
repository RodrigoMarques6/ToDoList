// Função para buscar as tasks no servidor (lembrar que é sempre uma função assíncrona, tendo em vista não sabermos quanto tempo vai levar para realizar a busca)

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    // Extraindo um json da nossa resposta à chamada da API:
    const tasks = await response.json();
    return tasks;
};

const tbody = document.querySelector('tbody');

// Função que cria elementos HTML:
const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}

const task = {
    id: 1, 
    title: 'Testando Task',
    created_at: '20 de Janeiro de 2023',
    status: 'Pendente'
}

// Função que cria uma linha e passa uma task como parâmetro para preencher lá no front
// Os dados da task estão vindo do parâmetro task abaixo
const createRow = (task) => {

    // Vamos tirar tudo de dentro da task com desestruturação (dados que virão do backend):

    const { title, id, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);

    // Para criarmos todos os "td", usaríamos "tdTitle.innerText = title;" por exemplo. Como são muitos, vamos utilizar uma forma diferente. Vamos na função de criar elemento (createElement) e vamos passar um parâmetro nela denominado "innerText". Trata-se de um parâmetro opcional. A mesma coisa ocorre para o created_at abaixo.
    const tdCreatedAt = createElement('td', created_at); 

    // Agora precisamos além de criar um "td", precisamos criar um select e também option. No caso, são 3 selects e 3 options.
}

// createRow(task)