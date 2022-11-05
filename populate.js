require('dotenv').config();
const Product = require('./models/Product');
const connectDB = require('./db/connect')
const jsonProducts = require('./dummy_data/products.json');

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);

        console.log('Database populated with data!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
populate();
