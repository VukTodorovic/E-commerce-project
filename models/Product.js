const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: [true, 'Please provide product name'],
            maxlength: 50
        },
        "company": {
            type: String,
            enum: {
                values: ['Samsung', 'Apple', 'Huawei', 'Honor', 'Xiaomi', 'Nokia'],
                message: 'Please provide valid company name'
            }
        },
        "price": {
            type: Number,
            required: [true, 'Please provide product price']
        },
        "description": {
            type: String,
            required: [true, 'Please provide product description'],
            maxlength: 300
        },
        "image": {
            type: Buffer,
            default: ''
        }
    },
    { timestamps: true }
)









module.exports = mongoose.model('Product', ProductSchema)