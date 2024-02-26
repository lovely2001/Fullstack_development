const fs = require("fs");

//To write into a file
// fs.writeFile("message.txt","Hello from NODE WORLD!!", (err)=> {
//     if(err) throw err;
//     console.log("file saved");
// });

//to read the file
fs.readFile("./message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});