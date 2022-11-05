const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    //if err.code === 400 then 'bad request'
    console.log(err);
    res.status(500).json({ msg: err.message });
}

module.exports = errorHandlerMiddleware;