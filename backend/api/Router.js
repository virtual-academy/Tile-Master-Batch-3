const express = require("express");
const Router = express();
 const productRouter = require('../controllers/product/index') 

 Router.use('/products', productRouter);


module.exports = Router;