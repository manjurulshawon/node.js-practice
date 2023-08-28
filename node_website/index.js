const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req,res)=>{
 
    if(req.url=="/"){
   let data = fs.readFileSync('home.html','utf8')
    res.end(data)
    }
    else if(req.url=="/Contract") {
     let data = fs.readFileSync('contract.html','utf8');
     res.end(data);
    }
    else if(req.url=="/About"){
        let data = fs.readFileSync('about.html','utf8');
        res.end(data);
    }
    else if(req.url=="/Trems"){
        let data = fs.readFileSync('trems.html',"utf8");
        res.end(data);
    }
});

myServer.listen(8000);
console.log("Server running.......");