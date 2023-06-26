// Vamos importar toda a taskModel para ser utilizada aqui e conseguir retornar um array lá no front::

const tasksModel = require('../models/tasksModel');

// Abaixo a função que retorna algo no front:

const getAll = async (req, res) => {

    // Adicionando uma função chamada tasks para armazenar o retorno da função getAll do tasksController importada para esse arquivo;
    // Tendo em vista a função importada ser assíncrona, ela leva um tempinho para retornar os dados.

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks)
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    
    await tasksModel.deleteTask(id);

    return res.status(204).json();

    // Status 204 significa que a requisição correu bem, mas não possui nenhum dado de resposta.
};

const updateTask = async (req, res) => {
    // Passando o id através dos parâmetros da URL:
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();

}

// Exportanto a função que retorna algo no front para ser utilizado publicamente no arquivo de código:

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};

// Em resumo: A função getAll que é a midleware que está sendo chamada no router vai utilizar a função getAll da model para trazer os dados do banco através da tasksModel, armazenar a const tasks e vai enviar(retornar) as tasks como resposta lá no front através do "return(tasks)"