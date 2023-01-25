const express = require("express");
const app = express();
var path = require('path');

app.get("/", (req, res)=>{
    res.send([{id:1, name: "Orxan", age: 27}, {id:2, name: "Saleh", age: 25}, {id:3, name: "Murad", age: 28}, {id:4, name: "Turan", age: 24}, {id:5, name: "Samir", age: 23}]);
})

app.get("/json", (req, res)=>{
    res.sendFile(path.join(__dirname,"./data.json"))
})

app.listen(3000, ()=>{
    console.log("adsfds");
})