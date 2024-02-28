import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

function bandnamegenerator(req, res, next) {
    console.log(req.body);
    bandname = req.body["Streetname"] + req.body["Petname"];
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); // Serve static files from the "public" directory

app.use(bandnamegenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is: ${bandname}</h1>`); // Send HTML response to the client
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
