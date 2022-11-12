const mongoose = require('mongoose');
const Product = require('../../models/Product')
const {StatusCodes} = require('http-status-codes');


const getProducts = async (req, res) => {
    const products = await Product.find();

    res.status(StatusCodes.OK).json({ products, nbHits: products.length });
}

const getSingleProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOne({_id : productId});

    if(!product) {
        throw new Error(`No product with id ${productId}`);
    }

    res.status(StatusCodes.OK).json(product);
}



module.exports = {
    getProducts,
    getSingleProduct
}