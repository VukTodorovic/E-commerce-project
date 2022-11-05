const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

const productRouter = require('./routes/client_app/product-router.js');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('express-async-errors');




// middleware
app.use(express.json());

// routes
app.use('/api/v1/products/', productRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('MongoDB connected');
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }  
}
start();


