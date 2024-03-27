const express = require('express')
const app = express();
const productRouter = require('./api/productAPI');
app.use('/api', productRouter);
app.listen('4000',()=>{
    console.log("Server is Live")
})
