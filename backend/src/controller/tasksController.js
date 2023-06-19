// Vamos importar toda a taskModel para ser utilizada aqui e conseguir retornar um array lá no front:

const tasksModel = require('../models/tasksModel');

// Abaixo a função que retorna algo no front:

const getAll = (req, res) => {

    // Adicionando uma função chamada tasks para armazenar o retorno da função getAll do tasksController importada para esse arquivo

    const tasks = tasksModel.getAll();

    return res.status(200).json( {message: 'Controller está ok'})
};

// Exportanto a função que retorna algo no front para ser utilizado publicamente no arquivo de código:

module.exports = {
    getAll
};