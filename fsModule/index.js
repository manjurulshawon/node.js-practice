
const fs = require("fs");
const http = require("http");

const myServer =http.createServer((req,res)=>{

//  ---------Ayschornous  file read--------

    if(req.url=="/"){
        // fs.readFile('Home.html',(error,data)=>{
        // res.writeHead(200,{'content-type':'text/html'});
        // res.write(data);
        // res.end();
        // })
        // -------------------Synchornous file resd------------
    //    const myData= fs.readFileSync('home.html');
    //    res.writeHead(200,{'content-type':'text/html'});
    //    res.write(myData);
    //    res.end();

    // ----------------------File Write Asynchornous--------------
    //  fs.writeFile('demo.txt','Welcome to Node js',function(error){
    //     if(error){
    //         res.writeHead(200,{'content-type':'text/html'});
    //         res.write("file write fail");
    //         res.end();
    //     }
    //     else{
    //         res.writeHead(200,{'content-type':'text/html'});
    //         res.write("file write success");
    //         res.end();
    //     }
    //  })

    // -----------------------File write Synchornous------------
    
    // const error = fs.writeFileSync('demo.txt','Welome to File Synchronous');
    // if(error){
    //     res.writeHead(200,{'content-type':'text/html'});
    //     res.write("file write fail");
    //     res.end(); 
    // }
    // else{
    //           res.writeHead(200,{'content-type':'text/html'});
    //           res.write("file write success");
    //           res.end();
    //          }

    // ------------------File Rename with Ayschornous---------------------

            //  fs.rename('demo.txt','demoNew.txt',(error)=>{
            //   if(error){
            //     res.writeHead(200,{'content-type':'text/html'});
            //     res.write('File rename error');
            //     res.end();
            //   }
            //   else{
            //     res.writeHead(200,{'content-type':'text/html'});
            //     res.write('File rename Success');
            //     res.end();
            //   }
            //  })
            // ---------------------File Rename with synchronous---------

            //  let error= fs.renameSync('demoNew.txt','demoNewNew.txt');
            //  if(error){
            //     res.writeHead(200,{'content-type':'text/html'});
            //     res.write('File rename error');
            //     res.end();
            //  }
            //  else{
            //     res.writeHead(200,{'content-type':'text/html'});
            //     res.write('File rename Success');
            //     res.end();
            //   }

            //   ---------------------------File Deleted Async-----------

            fs.unlink('demo.txt',(error)=>{
             if(error){
                res.writeHead(200,{'content-type':'text/html'});
                res.write('File Delete fail');
                res.end();
             }
             else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write('File delete Success');
                res.end();
              }
            });
    }
});
    myServer.listen(5000,()=>{
        console.log("Server Running....");
    });
   
