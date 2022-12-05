const mongoose = require('mongoose');
const Product = require('../../models/Product')
const {StatusCodes} = require('http-status-codes');


const getProducts = async (req, res) => {
    // Fieldovi koji su potrebni da se getuju
    const requiredFields = {
        //_id: true,
        name: true,
        price: true,
        img: true,
        company: true
    };

    // Query parametri
    const {
        name,
        company,
        price,
        sort
    } = req.query;
    let queryObject = {}; // Query object

    if(name){
        queryObject.name = { $regex: name, $options: "i" };
    }
    if(company) {
        const companies = company.split(' ');
        queryObject.company = { $in: companies };
    }
    if(price){ // price ce uvek biti u formatu "price=<[__NUMBER__]"
        const lowerThan = price.substring(1);
        queryObject.price = { $lt:  lowerThan };
    }

    let result = Product.find(queryObject, requiredFields);
    if(sort){
        result = result.sort(sort);
    }

    const products = await result;

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