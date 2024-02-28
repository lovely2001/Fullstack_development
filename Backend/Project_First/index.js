import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var password = "";

function siteopener(req, res, next) {
    password=req.body["password"] ;
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); 

app.use(siteopener);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(password == "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
