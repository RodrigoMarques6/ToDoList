document.addEventListener('DOMContentLoaded', function () {
    console.log('Primeiro de tudo: DOM funcionando perfeitamente!')
});

const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');


// Função para buscar as tasks no servidor (lembrar que é sempre uma função assíncrona, tendo em vista não sabermos quanto tempo vai levar para realizar a busca)



const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    // Extraindo um json da nossa resposta à chamada da API:
    const tasks = await response.json();
    return tasks;
};

// Função para adicionar tarefas no banco utilizando a API:

const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };
    // Vamos fazer uma requisição ao banco de dados para o endpoint criado:

     await fetch('http://localhost:3333/tasks',{ 
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        // Vamos passar uma string no formato de um objeto:
        body: JSON.stringify(task), 
    });
     // Adicionamos após o endpoint o método da requisição para que não seja utilizado o padrão que é o get.

     // Recarregar a página após adição de uma task (não aparece na tela se não der um refresh)
     loadTasks();
     
     inputTask.value = '';
     console.log(`Adicionamos uma task com sucesso!`)
}

// Função para excluir uma task:

const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'delete',
    });

    loadTasks();
    console.log(`Excluimos a task de ID:${id} com sucesso!`)
}

// Função para atualizar tarefas e conseguir tratar a parte do select:

const updateTask = async (task) => {
    // Passamos uma task inteira, pois vamos atualizá-la completamente
    const { id, title, created_at, status} = task;
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'put',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify({ title, status }),
    });

    loadTasks();
}

// Função para formatar a data que aparece nas tasks:

const formatDate = (dateUTC) => {
    const options = {dateStyle: 'long', timeStyle: 'short'}
    const date = new Date(dateUTC).toLocaleString(options);
    return date;
};

// Função que cria elementos HTML:
const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);

// Tendo em vista só podermos ter um innerText ou um innerHTML na mesma função, do contrário não funcionaria bem, então vamos passar aqui uma condição:
    if (innerText) {
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

// Após a condição, vamos no editButton e passamos o texto do span, ou seja, do button como terceiro parâmetro e não como segundo, e no segundo parâmetro nós passaremos como vazio.
    return element;
}

const createSelect = (value) => {
    // Vamos copiar as options do HTML para cá:
    const options = `
    <option value="Pendente">Pendente</option>
    <option value="Em andamento">Em andamento</option>
    <option value="Concluída">Concluída</option>`
    const select = createElement('select', '', options);

    select.value = value

    return select;
    
}

// Função que cria uma linha e passa uma task como parâmetro para preencher lá no front
// Os dados da task estão vindo do parâmetro task abaixo
const createRow = (task) => {

    // Vamos tirar tudo de dentro da task com desestruturação (dados que virão do backend):

    const { title, id, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);

    // Para criarmos todos os "td", usaríamos "tdTitle.innerText = title;" por exemplo. Como são muitos, vamos utilizar uma forma diferente. Vamos na função de criar elemento (createElement) e vamos passar um parâmetro nela denominado "innerText". Trata-se de um parâmetro opcional. A mesma coisa ocorre para o created_at abaixo.
    const tdCreatedAt = createElement('td', formatDate(created_at)); 

    // Agora precisamos além de criar um "td", precisamos criar um select e também option. No caso, são 3 selects e 3 options.
    // Vamos criar primeiro o td

    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    // Vamos criar nosso select:

    const select = createSelect(status);

    // Vamos adicionar um evento escutador no nosso select para quando eu modificar o status da task:

    select.addEventListener('change', ({target}) => (updateTask({ id, title, created_at, status: target.value})));

    // Vamos criar o elemento botão:
    // Passamos o span do botão:
    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');

    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    // Adicionando um pequeno form para edição do campo da task:

    const editForm = createElement('form');
    const editInput = createElement('input');

    editInput.value = title;
    editForm.appendChild(editInput);

    // Vamos permitir que, após edição do campo de task, possa realizar o envio:

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        updateTask({ id, title: editInput.value, status })
    })

    editButton.addEventListener('click', () => {
        tdTitle.innerText = '';
        tdTitle.appendChild(editForm);
    })
    
    // Adicionando a classe dos botões aqui no JS:

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    // Adicionando funcionalidade ao botão de excluir que está sendo criado dinamicamente com o JS:

    deleteButton.addEventListener('click', () => {
        deleteTask(id);
    })


    // Vamos tratar o select abaixo:

    tdStatus.appendChild(select)

    // Agora vamos adicionar os botões na td:

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    // Vamos colocar a td de título na tr:
    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    
    return tr;
}

// Função responsável por buscar no banco as tasks:

const loadTasks = async () => {
    // Utilizando a função que já existe no código para buscar as tasks no banco:
    const tasks = await fetchTasks();

    // Vamos limpar o HTML antes de realizar a adição de tasks na tela:

    tbody.innerHTML = '';

    // Precisamos percorrer o array de tarefas e montar as tarefas pra exibir na tela:
    tasks.forEach((task) => {
        // Criando uma tr como consta lá no HTML. A função createRow espera uma task, portanto, vamos passar a task como parâmetro
        const tr = createRow(task);
        // Vamos agora mostrar na tela:
        tbody.appendChild(tr);
    });
}

addForm.addEventListener('submit', addTask);

loadTasks();
