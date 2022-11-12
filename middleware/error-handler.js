const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    //if err.code === 400 then 'bad request'
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
}

module.exports = errorHandlerMiddleware;