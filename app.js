const path = require("path");
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, "./public");

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("this is home");
})

app.get("/About",(req,res)=>{
    res.send("this is About Page");
})

app.get("/Contact",(req,res)=>{
    res.send("Contact");
    })

app.get("/services",(req,res)=>{
    res.send("services");
    })
app.listen( 8000 , () => {
    console.log("The Application is Running in Port 8000 ");
})

// const path = require("path");
// const express = require('express');
// const app = express();

// const staticPath = path.join(__dirname, "../Medicos/css");

// app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.send("this is home");
// })

// app.get("/Medicines",(req,res)=>{
//     res.send("this is Medicines Page");
// })

// app.get("/Hotproducts",(req,res)=>{
//     res.send("this is Medicines Page");
// })