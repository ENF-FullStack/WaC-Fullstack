let serverPort = 9000, webDir="../wwwroot";

let express = require('express');
let app = express();
app.use(express.static(webDir));

app.listen(serverPort);

console.log('Server listening on http://localhost:'+serverPort);
console.log('Distributing site from: '+webDir);
