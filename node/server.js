/*
1.  Create the simple express server that distributes files from ../wwwroot
*/
let express=require("express");
let app=express();

// After implementing the cluster add a header that shows cluster.worker.id
app.use(function(req,resp,next){
    console.log("Processing request",req.path);
    resp.setHeader("x-my-header","Produced by myapp");
    next();
});


app.use(express.static("../wwwroot"));


app.listen(8000);
