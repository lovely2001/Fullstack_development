import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Homepage</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>contactpage</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>aboutpage</h1>");
});


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});