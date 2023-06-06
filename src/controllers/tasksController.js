// A camada de controllers vai salvar as funções que foram passadas no router

const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask();
}

// Explicando a situação: Vamos fazer uma requisição pra API, vai cair no router (na rota),após o getAll vai ser executado e por sua vez, executará o código que está armazenado na função getAll no arquivos tasksController.

module.exports = {
    getAll,
    createTask,
};

// Agora vamos importar essa função lá no router
