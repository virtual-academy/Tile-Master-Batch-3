const express = require("express");
const productRouter = express();

const products = [
    {
        id:1,
        prodName:"Camera"
    },
    {
        id:2,
        prodName:"LCD"
    },
]
const getAllProducts = (req, res)=>{
    res.status(200).send(products);
 
 }

productRouter.get('/get-all-products', getAllProducts);


module.exports = productRouter;