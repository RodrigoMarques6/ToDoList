// Middlewares: Serve para validações antes de chegar no controller.
// Os middlewares podem ser usados para realizar uma variedade de tarefas, como autenticação, autorização, validação de dados, manipulação de cabeçalhos, logging, compressão de dados, entre outras.

const validateBody = (request, response, next) => {
    // Vamos tirar algo da minha requisição: (nesse caso é o corpo)
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'Try send a TITLE!!'});
    };

    if (body.title === '') {
        return response.status(400).json({ message: 'The title cannot be empty!'})
    }

    // Caso a pessoa tenha passado o title corretamente:
    next();
};

module.exports = {
    validateBody,
};

// Essa função "validadeBody" serve para validar o corpo da nossa requisição, isto é, se o front realmente vai nos enviar o dado passando corretamente. Ex.: Se a gente espera um title, então vamos validar se o front está enviado realmente um title ou não..