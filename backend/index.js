const express = require('express')
const cors =require('cors')
const app = express();
const Router = require('./api/Router');
app.use(express.json())
app.use(cors());
app.use('/api', Router);
app.listen('4000',()=>{
    console.log("Server is Live")
})
