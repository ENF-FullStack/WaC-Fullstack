const fs=require("fs/promises");
if (process.argv.length<3){
    console.log("Usage: node readjson.js [filename]");
    return;
}
let fn=process.argv[2];
console.log("Reading:",fn);
fs.readFile(fn).then(s => {
    try{
        let obj=JSON.parse(s);
        function recurseObject(obj){
            for(let k in obj){
                if (k.endsWith("_date")) obj[k]=new Date(obj[k]);
                else{
                    if (Array.isArray(obj[k]) || typeof(obj[k])=='object'){
                        recurseObject(obj[k]);
                    }
                }
            }
        }
        recurseObject(obj);
        console.dir(obj,{depth:5});
    }
    catch(x){
        console.log("Error parsing json",x);
    }
})
.catch(x => console.log("Error reading",fn,x));