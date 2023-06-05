// A camada de controllers vai salvar as funções que foram passadas no router

const getAll = (req, res) => {
    return res.status(200).json({message: 'Controller está correto'});
};

module.exports = {
    getAll
}

// Agora vamos importar essa função lá no router
