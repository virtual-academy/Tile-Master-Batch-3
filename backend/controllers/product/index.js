const express = require('express');
const productRouter = express();
const product  = require('./product')

productRouter.get('/get-all-products', product.getAllProducts );
productRouter.post('/save-product',product.saveProduct);


module.exports = productRouter;