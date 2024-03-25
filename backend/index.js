const express = require('express')
const app = express();

app.get('/get-server', (req, res)=>{
    res.send("Muhammad Shahid Azeem")
})
app.get('/', (req, res)=>{
    res.send("Tileter..")
})

app.get('/past-papers',(req, res)=>{
    res.send("Past Papers....");
})
app.listen('4000',()=>{
    console.log("Server is Live")
})
