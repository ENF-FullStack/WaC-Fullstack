let serverPort=9000, 
    webDir="../wwwroot";

let express = require('express');

let app = express();
app.use(express.static(webDir));
 
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

function processVars(title,obj){
    let r=`<h2>${title}</h2><div>`;
    for(let k in obj){
        r+=`<p style="margin:0;padding:0">${k}=${obj[k]}</p>`;
    }
    r+='</div>';
    return r;
}

function process(req,resp){
    console.log("Params",req.query);
    let r="<html><body>";
    r+="<h1>Server got the following data</h1>";
    r+=processVars("From Query String (get)",req.query);
    r+=processVars("From body (post)",req.body);
	r+="</body></html>";
	resp.send(r);
}

app.post("/formdata",process);
app.get("/formdata",process);


app.listen(serverPort);
console.log('Server listening on http://localhost:'+serverPort);
console.log('Distributing site from: '+webDir);