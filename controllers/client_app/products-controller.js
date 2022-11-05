const mongoose = require('mongoose');
const Product = require('../../models/Product')

const testRoute = (req, res) => {
    //throw Error('Nesto je poslo po zlu zaime Boga');
    res.send('<h1>Test route</h1>');
}

const getProducts = async (req, res) => {
    const products = await Product.find();

    res.json({products, nbHits: products.length});
}

const getSingleProduct = async (req, res) => {
    res.send('<h1>Get Single Product</h1>');
}



module.exports = {
    testRoute,
    getProducts,
    getSingleProduct
}