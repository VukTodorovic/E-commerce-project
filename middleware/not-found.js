const {StatusCodes} = require('http-status-codes');



const notFoundMiddleware = (req, res) => {
    const response = `
        <div>
            <h1>Requested URL not found</h1>
        </div>
    `

    res.status(StatusCodes.NOT_FOUND).send(response);
}



module.exports = notFoundMiddleware;