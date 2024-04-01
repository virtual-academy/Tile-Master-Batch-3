exports.getAllProducts = (req, res)=>{
    const data = {
        id:"1",
        name:"Camera"
    }
    // console.log(" G)
    res.send(data);
}
exports.saveProduct = (req, res)=>{
    console.log(req.body);
    res.send("Data saved Successfully...");

}