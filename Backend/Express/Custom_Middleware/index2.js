import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;


// Custom middleware
// function logger(req,res,next){
//     console.log("Request Method : ", req.method);
//     console.log("Request URL : ",req.url);
//     next();
// }

app.use(logger);



app.use(morgan("tiny"));

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});