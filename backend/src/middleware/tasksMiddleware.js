// Arquivo específico para validações

// Função para validar o corpo da requisição:
const validadeBody = (req, res, next) => {
    // Vamos tirar algo de dentro da requisição:
    // Nesse caso, tiramos o body
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({ message: 'The field title is required!'})
    };

    if (body.title === '') {
        return res.status(400).json({ message: 'The field title cannot this empty!'})
    }

    next();
    // Após, vamos importar nosso tasksMiddleware lá no router
    // O next serve para caso não aconteça nenhuma das opções, ele vai executar a middleware e após validação, dar o next
};

module.exports = {
    validadeBody
}