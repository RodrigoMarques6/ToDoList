const getAll = (req, res) => {
    return res.status(200).json( {message: 'Controller está ok'})
};

module.exports = {
    getAll
};