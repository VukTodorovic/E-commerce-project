const express = require('express');
const app = express();
const router = express.Router();
const { testRoute, getProducts, getSingleProduct } = require('../../controllers/client_app/products-controller');




router.route('/test').get(testRoute);
router.route('/').get(getProducts);
router.route('/:id').get(getSingleProduct);





module.exports = router;